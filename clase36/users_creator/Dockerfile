FROM node:20.11.1

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY src /app/src

EXPOSE 8080

CMD ["npm", "start"]