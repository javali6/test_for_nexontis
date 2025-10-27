const assert = require('assert');

Feature('Reqres API Tests');

const { I } = inject();

Scenario('Get list of users and filter odd IDs', async ({ I }) => {
  const res = await I.sendGetRequest('/api/users?page=1');
  assert.equal(res.status, 200, 'Response should be successful');
  const oddUsers = res.data.data.filter(u => u.id % 2 === 1);
  I.say(`Users with odd IDs:\n${oddUsers.map(u => `${u.id}: ${u.first_name} ${u.last_name}`).join('\n')}`);
});

Scenario('Create a new user and validate creation date', async ({ I }) => {
  const body = { name: 'John Doe', job: 'QA Engineer' };
  const res = await I.sendPostRequest('/api/users', body);
  assert.equal(res.status, 201, 'User should be created');
  const createdAt = new Date(res.data.createdAt);
  const today = new Date();
  assert.equal(
    createdAt.toISOString().slice(0, 10),
    today.toISOString().slice(0, 10),
    'Creation date should be today'
  );
});

Scenario('Update a user and validate response', async ({ I }) => {
  const body = { name: 'Jane Smith', job: 'Automation Tester' };
  const res = await I.sendPutRequest('/api/users/2', body);
  assert.equal(res.status, 200, 'User should be updated');
  assert.equal(res.data.name, body.name);
  assert.equal(res.data.job, body.job);
});

const delayValues = [0, 3];
delayValues.forEach(delay => {
  Scenario(`List users with delay=${delay} and validate response time`, async ({ I }) => {
    const start = Date.now();
    const res = await I.sendGetRequest(`/api/users?delay=${delay}`);
    const duration = (Date.now() - start) / 1000;

    assert.equal(res.status, 200, 'Response should be successful');
    I.say(`Response time for delay=${delay}: ${duration} seconds`);

    const margin = 0.5; 
    assert(duration >= delay, `Response time (${duration}s) should be at least ${delay}s`);
    assert(duration <= delay + margin, `Response time (${duration}s) exceeded expected delay + margin`);
  });
});


Scenario('Login user without password', async ({ I }) => {
  const body = { email: 'eve.holt@reqres.in' };
  const res = await I.sendPostRequest('/api/login', body);

  assert.equal(res.status, 400, 'Login without password should fail');
  I.say(`Error message: ${res.data.error}`);
});
