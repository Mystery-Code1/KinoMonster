# KinoMonster
This is a 2019 training site (updated in 2021) developed on the django python framework. The site uses bootstrap to simplify layout support, but has not yet been fully adapted to mobile devices. The site can be launched via:
### Docker compose
1. Download the zip archive of the repository
2. unzip and open the kinomonster folder on the command line.
3. Enter the command: `docker compose up`
The project will be launched on port 8000
4. Navigate to the url in the browser: http://127.0.0.1:8000
### Manual start
1. Open the config.ini file, enter the data of the existing database (host, name, password). If you want to use a domain name, set it in the ALLOWED_HOST parameter.
2. Open the kinomonster folder in the command prompt.
3. Install pipenv: `pip install pipenv`
4. Open the VM: `pipenv shell`
5. Install the modules (from pipfile) with the command: `pipenv install`
6. Enter two commands sequentially:
`pipenv run python manage.py migrate`
`pipenv run python manage.py runserver 127.0.0.1:8000`
7. Go to the url in the browser: 127.0.0.1:8000