FROM node:alpine

WORKDIR /app

EXPOSE 3004

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:prod"]