# Dockerfile for server
# Stage 1: Build the server application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY server/package.json server/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server application code
COPY server/ ./

# Stage 2: Run the server application
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the built application code from the previous stage
COPY --from=build /app ./

# Install nodemon for running the server
RUN npm install -g nodemon

# Copy the environment variables file
COPY server/.env ./

# Expose the port the server listens on
EXPOSE 5000

# Start the server
CMD ["nodemon", "index.js"]