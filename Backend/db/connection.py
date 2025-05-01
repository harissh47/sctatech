import psycopg2
from psycopg2 import pool
from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy

load_dotenv()

db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASSWORD')
db_host = os.getenv('DB_HOST')
db_port = os.getenv('DB_PORT')
db_name = os.getenv('DB_NAME')

DATABASE_URL = f"postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}"

db = SQLAlchemy()

def init_db(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

class DatabaseConnection:
    def __init__(self):
        self.connection_pool = pool.SimpleConnectionPool(
            1,
            20,
            user=db_user,
            password=db_password,
            host=db_host,
            port=db_port,
            database=db_name
        )
    def get_connection(self):
        return self.connection_pool.getconn()
    def release_connection(self, connection):
        self.connection_pool.putconn(connection)

