FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=2136
EXPOSE 2136
CMD [ "npm", "run", "dev" ]
