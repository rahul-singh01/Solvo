# Dockerfile for server
FROM node:18-alpine AS build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY server/package.json server/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server files
COPY server ./

# Build stage (if needed for any preprocessing)
RUN npm run build # If there's a build step, otherwise this can be omitted

# Stage 2: Production
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the installed dependencies from the build stage
COPY --from=build /app/node_modules ./node_modules

# Copy the application files from the build stage
COPY --from=build /app ./

# Expose port 3000 (or whatever port your server runs on)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]