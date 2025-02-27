# Dockerfile for client
# Stage 1: Build the client application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY client/package.json client/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client application code
COPY client/ ./

# Build the client application
RUN npm run build

# Stage 2: Serve the built client application
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that Nginx listens on
EXPOSE 80