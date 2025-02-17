# Dockerfile for server

# Use the official Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY server/package.json server/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server app
COPY server/ ./

# Expose the port the app runs on
EXPOSE 3000

# Start the server
CMD ["npm", "start"]