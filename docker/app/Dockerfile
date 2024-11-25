# https://www.php.net/downloads.php
FROM php:8.3-apache

RUN apt-get update \
  && apt-get install -y gnupg gosu curl ca-certificates zip unzip git supervisor libcap2-bin libpng-dev dnsutils librsvg2-bin fswatch ffmpeg vim  \
  && docker-php-ext-install pdo_mysql exif pcntl bcmath

# https://getcomposer.org/doc/00-intro.md#docker-image
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

COPY docker/apache/default.conf /etc/apache2/sites-enabled/000-default.conf
COPY docker/app/php.ini /usr/local/etc/php/php.ini
COPY src/backend /var/www/html/

RUN  a2enmod rewrite
RUN chown -R www-data:www-data /var/www/html/storage && chmod -R 775 /var/www/html/storage

WORKDIR /var/www/html
