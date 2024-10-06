# https://www.php.net/downloads.php
FROM php:8.3-apache

RUN apt-get update \
  && apt-get install -y gnupg gosu curl ca-certificates zip unzip git supervisor libcap2-bin libpng-dev dnsutils librsvg2-bin fswatch ffmpeg vim  \
  && docker-php-ext-install pdo_mysql exif pcntl bcmath

# https://getcomposer.org/doc/00-intro.md#docker-image
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

RUN  a2enmod rewrite

WORKDIR /var/www/html
