# Ubuntu base
FROM ubuntu:14.04

# Author
MAINTAINER Peter Maroti

# Updates
RUN apt-get -y update
RUN apt-get -y upgrade

# Installs
RUN apt-get -y install ruby ruby-dev make nodejs 
RUN gem install jekyll