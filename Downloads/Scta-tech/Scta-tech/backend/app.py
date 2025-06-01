from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS  # <-- add this

from db.connection import db as db_instance
from db.connection import init_db
from routes import routes_bp

app = Flask(__name__)
CORS(app, origins=["http://localhost:8080"])  # <-- allow frontend origin

init_db(app)
migrate = Migrate(app, db_instance)

app.register_blueprint(routes_bp)

import db.model   # Ensure models are registered
import routes     # Register routes after db is initialized

if __name__ == '__main__':
    with app.app_context():
        print(db_instance)
        db_instance.create_all()
    app.run(debug=True, port=8000)
