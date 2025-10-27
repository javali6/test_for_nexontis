# test_for_nexontis

## Build the Docker image

Run the following command from the project root (where the `Dockerfile` is located):
```bash
docker build -t codecept-tests -f ./Dockerfile . 
```

Run the following command to execute on Windows 11 with powershell
```bash
docker run --rm -v "${PWD}/output:/usr/src/app/output" codecept-tests
```

Run the following command to execute on Linux
```bash
docker run --rm -v "$(pwd)/output:/usr/src/app/output" codecept-tests
```
