FROM node:12-stretch
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY . . 
RUN npm install
RUN npm run build
EXPOSE 21380
ENTRYPOINT node server.js
