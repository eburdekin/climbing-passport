from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from datetime import datetime
from config import db, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property


class Climber(db.Model, SerializerMixin):
    __tablename__ = "climbers"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String)

    # Authentication

    @hybrid_property
    def password_hash(self):
        raise AttributeError("Password hashes may not be viewed.")

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode("utf-8"))
        self._password_hash = password_hash.decode("utf-8")

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode("utf-8"))

    # Relationships

    badges = db.relationship(
        "Badge", back_populates="climber", cascade="all, delete-orphan"
    )
    mountains = association_proxy("badges", "mountain")

    # Serialization rules

    serialize_rules = (
        "-badges.climber",
        "-_password_hash",
    )

    def __repr__(self):
        return f"<Climber {self.name}>"


class Mountain(db.Model, SerializerMixin):
    __tablename__ = "mountains"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    grade = db.Column(db.String, nullable=False)
    latitude = db.Column(db.Integer, nullable=False)
    longitude = db.Column(db.Integer, nullable=False)

    # Relationships

    badges = db.relationship(
        "Badge", back_populates="mountain", cascade="all, delete-orphan"
    )
    climbers = association_proxy("badges", "climber")

    # Serialization rules

    serialize_rules = ("-badges.mountain",)

    # Validation

    @validates("type")
    def validate_type(self, key, value):
        allowed_types = {"Sport", "Bouldering", "Trad"}
        if value not in allowed_types:
            raise ValueError(
                f"Invalid mountain type. Allowed types are: {', '.join(allowed_types)}"
            )
        return value

    def __repr__(self):
        return f"<Mountain {self.name}>"


class Badge(db.Model, SerializerMixin):
    __tablename__ = "badges"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String, nullable=False)
    completed = db.Column(db.String, nullable=False)

    # Foreign keys

    climber_id = db.Column(db.Integer, db.ForeignKey("climbers.id"))
    mountain_id = db.Column(db.Integer, db.ForeignKey("mountains.id"))

    # Relationships

    climber = db.relationship("Climber", back_populates="badges")
    mountain = db.relationship("Mountain", back_populates="badges")

    # Serialization rules

    serialize_rules = (
        "-climber.badges",
        "-mountain.badges",
    )

    # Validations

    @validates("date")
    def validate_date(self, key, value):
        try:
            # Attempt to parse the value as a valid date
            date_obj = datetime.strptime(str(value), "%Y-%m-%d")

            # Check if the parsed date is within the desired range (1 to 30)
            if not (1 <= date_obj.day <= 31):
                raise ValueError("Day must be between 1 and 31")

            return date_obj.date()
        except ValueError:
            raise ValueError(
                "Invalid date format. Please provide a valid date in the format YYYY-MM-DD"
            )

    @validates("climber_id")
    def validate_climber_id(self, key, value):
        climber = Climber.query.get(value)
        if not climber:
            raise ValueError("Climber must exist")
        return value

    @validates("mountain_id")
    def validate_mountain_id(self, key, value):
        mountain = Mountain.query.get(value)
        if not mountain:
            raise ValueError("Mountain must exist")
        return value

    # Not sure what to return for this:

    def __repr__(self):
        return f"<Badge ${self.id}>"
