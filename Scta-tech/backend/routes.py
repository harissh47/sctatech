from flask import Blueprint, jsonify, request
from db.connection import db
from db.model import User , CareerApplication
from Datasheet.Datasheet import append_data

routes_bp = Blueprint('routes_bp', __name__)

@routes_bp.route('/users', methods=['POST'])
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

@routes_bp.route('/career_applications', methods=['POST'])
def career_query():
    data = request.get_json()
    application = CareerApplication(
        name=data.get('name'),
        phone=data.get('phone'),
        email=data.get('email'),
        applying_position=data.get('applying_position'),
        address=data.get('address'),
        qualification=data.get('qualification'),
        skills=data.get('skills'),
        total_experience=data.get('total_experience'),
        relevant_experience=data.get('relevant_experience'),
        current_ctc=data.get('current_ctc'),
        expected_ctc=data.get('expected_ctc'),
        is_negotiable=data.get('is_negotiable'),
        notice_period=data.get('notice_period'),
        reason_for_change=data.get('reason_for_change'),
        current_location=data.get('current_location'),
        willing_to_relocate=data.get('willing_to_relocate'),
        preferred_contact_time=data.get('preferred_contact_time'),
        security_code=data.get('security_code')
    )
    db.session.add(application)
    db.session.commit()

    return jsonify({'message': 'Career application submitted successfully'})

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
