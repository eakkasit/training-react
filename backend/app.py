from turtle import position
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost:5432/users'

db = SQLAlchemy(app)
CORS(app)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer)
    position = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def __repr__(self):
        return f"Users: {self.id}"

    def __init__(self,fullname,age,position):
        self.fullname = fullname
        self.age = age
        self.position = position

def format_user(user):
    return {
        "fullname": user.fullname,
        "age": user.age,
        "position": user.position,
        "id": user.id,
        "created_at": user.created_at
    }

@app.route('/')
def hello():
    return 'Hey!'
# create an user
@app.route('/user', methods = ['POST'])
def create_user():
    fullname = request.json['fullname']
    age = request.json['age']
    position = request.json['position']
    user = Users(fullname, age, position)
    db.session.add(user)
    db.session.commit()
    return format_user(user)

# get all user
@app.route('/users', methods = ['GET'])
def get_users():
    users = Users.query.order_by(Users.id.asc()).all()
    user_list = []
    for user in users:
        user_list.append(format_user(user))
    return {'users': user_list}

# get single evet
@app.route('/users/<id>', methods = ['GET'])
def get_user(id):
    users = Users.query.filter_by(id=id).one()
    formatted_user = format_user(users)
    return {'users': formatted_user}

# delete an user
@app.route('/users/<id>', methods = ['DELETE'])
def delete_user(id):
    users = Users.query.filter_by(id=id).one()
    db.session.delete(users)
    db.session.commit()
    return f'Users: (id: {id}) deleted!'

# update an user
@app.route('/users/<id>', methods = ['PUT'])
def update_user(id):
    user = Users.query.filter_by(id=id)
    fullname = request.json['fullname']
    age = request.json['age']
    position = request.json['position']
    user.update(dict(fullname = fullname, age = age, position = position, created_at = datetime.utcnow()))
    db.session.commit()
    return {'user': format_user(user.one())}

if __name__ == '__main__':
    app.run()