FROM node:16-alpine
COPY package*.json ./
COPY . .
RUN npm install 
EXPOSE 5000
CMD [ "node", "index.js" ]