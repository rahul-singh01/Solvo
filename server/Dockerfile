# Dockerfile for server
# Stage 1: Build the server application
FROM node:14
WORKDIR /app
COPY server/package.json server/package-lock.json ./
RUN npm install
COPY server/ ./
EXPOSE 5000
CMD ["nodemon", "index.js"]