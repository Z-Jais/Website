FROM node:20-alpine AS build
COPY . /app
WORKDIR /app
RUN rm -rf node_modules
RUN npm ci
RUN npm install workbox-cli --global
RUN npm run build
RUN workbox generateSW workbox-config.js

FROM httpd:alpine
COPY --from=build /app/my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/