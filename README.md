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


I chose to implement the technologies presented in this project as a way to prepare myself for potential new challenges at Nexontis.
Up to this point, my primary automation framework has been Robot Framework, so adopting a new technology already represented my first learning challenge.
