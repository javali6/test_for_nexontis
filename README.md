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

Screenshot of test execution on my PC
UI - tests
<br>

<img width="652" height="553" alt="image" src="https://github.com/user-attachments/assets/931fbad1-1d8d-42db-a81e-90745f67b4fc" />
<img width="1176" height="493" alt="image" src="https://github.com/user-attachments/assets/8c464c70-3a33-4e33-a4e7-60440b25d5c9" />
<img width="542" height="184" alt="image" src="https://github.com/user-attachments/assets/2e0bb216-6ad9-4048-97fa-52202b6adbf3" />


API- tests
<br>

<img width="765" height="522" alt="image" src="https://github.com/user-attachments/assets/e322ca7b-d110-49c6-b237-40c2b7308f6c" />
<img width="523" height="314" alt="image" src="https://github.com/user-attachments/assets/451c2cf1-c853-4ac1-b9e8-ba6c20e6c42f" />



