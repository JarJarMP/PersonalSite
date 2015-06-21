# Ubuntu base
FROM ubuntu:14.04

# Author
MAINTAINER Peter Maroti

# Updates
RUN apt-get -y update
RUN apt-get -y upgrade

# Install requirements
RUN apt-get -y install ruby ruby-dev make nodejs npm git

# Install jekyll
RUN gem install jekyll

# Install bower
RUN npm install -g bower
RUN ln -s /usr/bin/nodejs /usr/bin/node