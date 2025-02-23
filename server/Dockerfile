# Dockerfile for server

# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY server/package.json ./
COPY server/package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY server/ ./

# Expose the port that the app runs on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]