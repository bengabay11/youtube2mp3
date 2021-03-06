FROM node:8

COPY . /src
WORKDIR /src

RUN cd ./client && npm install
RUN cd ./server && npm install
RUN cd ./client && npm run build 

EXPOSE 80
CMD [ "node", "./server/app.js" ]
