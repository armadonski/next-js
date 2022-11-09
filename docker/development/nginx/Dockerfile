ARG NGINX_VERSION=latest

FROM nginx:${NGINX_VERSION} as nginx

USER nginx
WORKDIR /var/www/app
COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
USER root