# Dockerfile for client
# Stage 1: Build the client application
FROM node:14 as build
WORKDIR /app
COPY client/package.json client/yarn.lock ./
RUN yarn install
COPY client/ ./
RUN yarn build

# Stage 2: Serve the built application using nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]