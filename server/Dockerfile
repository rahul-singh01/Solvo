# Dockerfile for server

# Stage 1: Build the Node.js application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY server/package.json server/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY server/ ./

# Build the Node.js app (if there are any build steps)
# Note: Assuming no build step is needed as per the provided package.json

# Stage 2: Run the Node.js application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built application code from the previous stage
COPY --from=build /app ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]