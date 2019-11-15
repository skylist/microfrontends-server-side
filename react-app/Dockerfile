# building
FROM node:12.13.0-alpine as builder
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.17.5-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder app/build /usr/share/nginx/html
EXPOSE 80