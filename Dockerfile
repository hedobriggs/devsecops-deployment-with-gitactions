FROM node:18

WORKDIR /app

COPY package*.json ./

# Force install all deps (including react-scripts)
RUN npm install --include=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
