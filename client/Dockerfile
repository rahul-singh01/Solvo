# Dockerfile for client

# Stage 1: Build
FROM node:14 AS build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY client/package.json client/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY client/ ./

# Build the application
RUN yarn build

# Stage 2: Production
FROM nginx:alpine

# Copy build files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]