FROM node:16-alpine
COPY package*.json ./
RUN npm install ./
EXPOSE 5000
CMD [ "node", "server.js" ]