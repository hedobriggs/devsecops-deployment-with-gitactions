
# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Debug: Check if files are there
RUN ls -la

# Install dependencies
RUN npm install --legacy-peer-deps

# Debug: Check if react-scripts is installed
RUN ls -la node_modules/.bin/

# Debug: Check package.json scripts
RUN cat package.json

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]