# Dockerfile for client

# Stage 1: Build the React app
FROM node:16-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY client/package.json client/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the client app
COPY client/ ./

# Build the React app
RUN yarn build

# Stage 2: Serve the static files
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80