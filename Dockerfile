FROM --platform=linux/amd64 node:19-alpine3.16 as build
WORKDIR /usr/app
COPY . /usr/app
RUN yarn install --frozen-lockfile
RUN yarn run build
#RUN npm ci
#RUN npm run build

FROM --platform=linux/amd64 nginx:1.23.3-alpine
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html
