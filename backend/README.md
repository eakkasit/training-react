# Python Flask for back end and REST API

## Require

1. python3 (https://www.python.org/downloads/)
2. postgresql and pgAdmin4 (https://www.postgresql.org/download/)

## INSTALL

1. install python3 
2. install pipevn "pip install pipenv" or "pip3 install pipenv"
3. change directory to backend
4. run command "pipenv shell"
5. run command "pipenv install flask flask-sqlalchemy psycopg2-binary python-dotenv flask-cors" (for mac) or<br />
   "pipenv install flask flask-sqlalchemy psycopg2 python-dotenv flask-cors" (for window)


## Create Database

1. In pipenv shell run command "python3" or "python" (for alias)
2. run command "from app import db"
3. run command "db.create_all()"

## For run program

1. run command "flask run" in pipenv shell
2. check http://127.0.0.1:5000/ .if say "Hey!" it's work

### !Important
*** please change password for database to local and check port in file app.py. Could you find SQLALCHEMY_DATABASE_URI and change password 

** if don't have file .flaskenv please you create and coppy this to file 
FLASK_APP=app <br />
FLASK__ENV=development
