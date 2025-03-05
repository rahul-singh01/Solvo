# Dockerfile for server

# Stage 1: Build
FROM node:14 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY server/package.json server/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY server/ ./

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY server/package.json server/package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code from the build stage
COPY --from=build /app ./

# Set environment variables
COPY server/.env ./

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]