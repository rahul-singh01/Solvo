# Dockerfile for client
FROM node:18-alpine AS build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY client/package.json client/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the client files
COPY client ./

# Build the React application
RUN yarn build

# Stage 2: Production
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]