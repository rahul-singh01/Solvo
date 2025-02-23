# Dockerfile for client

# Stage 1: Build the React app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY client/package.json ./
COPY client/yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code
COPY client/ ./

# Build the React app
RUN yarn build

# Stage 2: Serve the built React app
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that the app runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]