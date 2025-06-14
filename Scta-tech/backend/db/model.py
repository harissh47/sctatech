from db.connection import db
from datetime import datetime

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    interested = db.Column(db.String(120), nullable=True)
    message = db.Column(db.Text, nullable=True)

class CareerApplication(db.Model):
    __tablename__ = 'career_applications'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    applying_position = db.Column(db.String(120), nullable=False)
    address = db.Column(db.Text, nullable=False)
    qualification = db.Column(db.String(120), nullable=False)
    skills = db.Column(db.Text, nullable=False)
    total_experience = db.Column(db.String(20), nullable=False)  # e.g., "3 years 4 months"
    relevant_experience = db.Column(db.String(120), nullable=False)
    current_ctc = db.Column(db.String(20), nullable=False)
    expected_ctc = db.Column(db.String(20), nullable=False)
    is_negotiable = db.Column(db.String(10), nullable=False)
    notice_period = db.Column(db.String(120), nullable=False)
    reason_for_change = db.Column(db.Text, nullable=False)
    current_location = db.Column(db.String(120), nullable=False)
    willing_to_relocate = db.Column(db.String(10), nullable=False)
    preferred_contact_time = db.Column(db.String(120), nullable=False)
    security_code = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
