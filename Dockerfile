FROM node:18.13

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

EXPOSE 80 

CMD ["npm", "run", "start"]
