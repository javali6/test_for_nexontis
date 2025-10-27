module.exports = function() {
  return actor({
    login: function(username, password) {
      this.fillField('Username', username);
      this.fillField('Password', password);
      this.click('Login');
    }
  });
}
