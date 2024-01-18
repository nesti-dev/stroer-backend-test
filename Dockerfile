FROM node:latest
LABEL authors="nesti"

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
