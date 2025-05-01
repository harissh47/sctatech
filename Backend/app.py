from flask import Flask
from db.connection import db, init_db
from flask_migrate import Migrate
app = Flask(__name__)
init_db(app)
migrate = Migrate(app, db)

import db.model  # Ensure models are registered
import routes    # Register routes after db is initialized

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=8000)