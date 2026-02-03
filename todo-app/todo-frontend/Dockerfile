# syntax=docker/dockerfile:1
# Dockerfile para todo-frontend
FROM node:20 AS deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install

FROM deps AS test
COPY . .
RUN npm run test

FROM deps AS build
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
