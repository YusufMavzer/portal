# develop stage
FROM node:lts-alpine as develop-stage

WORKDIR /app
ADD package*.json ./
RUN yarn install
COPY . .

# add nginx
RUN apk add --update nginx nodejs
RUN mkdir -p /var/log/nginx
COPY nginx.conf /etc/nginx/nginx.conf

# build stage
FROM develop-stage as build-stage
RUN yarn build --mode production

# production stage
FROM build-stage as production-stage
COPY /dist /usr/share/nginx/html
RUN chown nginx:nginx /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]