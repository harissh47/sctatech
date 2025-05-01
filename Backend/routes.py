from flask import jsonify, request
from db.connection import db
from db.model import User
from app import app
from Datasheet.Datasheet import append_data
@app.route('/people_query', methods=['POST'])
def people_query():
    data = request.get_json()
    user = data.get('user')
    phone = data.get('phone')
    email = data.get('email')
    message = data.get('message')

    new_user = User(username=user, phone=phone, email=email, message=message)
    db.session.add(new_user)
    append_data(user, phone, email, message)
    db.session.commit()

    return jsonify({'message': 'User created successfully'})
    