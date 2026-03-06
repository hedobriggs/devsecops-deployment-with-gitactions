FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies
ENV NODE_ENV=development
RUN npm install

# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Start
CMD ["npm", "start"]
