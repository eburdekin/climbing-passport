# Standard library imports

# Remote library imports
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
import os
from flask_bcrypt import Bcrypt

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")
# Local imports

# Instantiate app, set attributes
app = Flask(__name__)
app.secret_key = "ErrD76SEpKMDMcq71y4WfqnsZRDogwU3yZs6dKr0S2M4tHaA0KksY585UWR3psX"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

# Define metadata, instantiate db
metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)


bcrypt = Bcrypt(app)

# Instantiate REST API
api = Api(app)


# Instantiate CORS
CORS(app)
