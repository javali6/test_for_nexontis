FROM node:20-bullseye

WORKDIR /usr/src/app

COPY package*.json ./
COPY codecept.conf.js ./
COPY steps_file.js ./
COPY tests ./tests
COPY pages ./pages

RUN npm install

RUN npx playwright install --with-deps

ENV HEADLESS=true

VOLUME ["/usr/src/app/output"]

CMD ["npx", "codeceptjs", "run", "--steps"]