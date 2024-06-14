FROM node:20.11.1

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]

# docker run -d --name coder-news-1 -p 3000:8080 -e DB_NAME=coder-news -e NEWS_API_KEY=5ba0fd89d9164e7abd09fa9dbc8d1e38 -e MONGO_URI=mongodb://host.docker.internal:27017 perlucas/coder-news:1.0.0