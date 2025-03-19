FROM node:alpine

WORKDIR /

EXPOSE 3004

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]