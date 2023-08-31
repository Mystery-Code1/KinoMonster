FROM python:3.10
EXPOSE 8000
RUN apt-get update
RUN pip install --upgrade pip
RUN pip install pipenv
COPY . var/www/kinomonster
RUN cd var/www/kinomonster && pipenv install