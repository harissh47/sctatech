from flask import Blueprint, jsonify, request
from db.connection import db
from db.model import User
from Datasheet.Datasheet import append_data

routes_bp = Blueprint('routes_bp', __name__)

@routes_bp.route('/people_query', methods=['POST'])
def people_query():
    data = request.get_json()
    user = data.get('user')
    phone = data.get('phone')
    email = data.get('email')
    interested = data.get('interested')
    message = data.get('message')

    new_user = User(username=user, phone=phone, email=email, interested=interested, message=message)
    db.session.add(new_user)
    append_data(user, phone, email, interested, message)
    db.session.commit()

    return jsonify({'message': 'User created successfully'})

@routes_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([
        {
            'username': user.username,
            'phone': user.phone,
            'email': user.email,
            'interested': user.interested,
            'message': user.message
        } for user in users
    ])
