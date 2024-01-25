#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from models import Climber, Mountain, Badge

from flask import request, session, make_response
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError


# Local imports
from config import app, db, api


@app.route("/")
def index():
    return "<h1>Project Server</h1>"


# Authentication


@app.before_request
def check_if_logged_in():
    open_access_list = ["signup", "login", "check_session", "mountains"]

    if (request.endpoint) not in open_access_list and (not session.get("user_id")):
        return {"error": "401 Unauthorized"}, 401


class Signup(Resource):
    def post(self):
        request_json = request.get_json()

        name = request_json.get("name")
        email = request_json.get("email")
        password = request_json.get("password")

        climber = Climber(email=email, name=name)

        # the setter will encrypt this
        climber.password_hash = password

        try:
            db.session.add(climber)
            db.session.commit()

            climber_id = climber.id

            # successfully adds climber to Climbers db
            # user_id isn't added to Cookies - need to troubleshoot

            session["user_id"] = climber_id

            return climber.to_dict(), 201

        except IntegrityError:
            return {"error": "422 Unprocessable Entity"}, 422


class CheckSession(Resource):
    def get(self):
        user_id = session["user_id"]
        if user_id:
            climber = Climber.query.filter(Climber.id == user_id).first()
            return climber.to_dict(), 200

        return {}, 401


class Login(Resource):
    def post(self):
        request_json = request.get_json()

        email = request_json.get("username")
        password = request_json.get("password")

        climber = Climber.query.filter(Climber.email == email).first()

        if climber:
            if climber.authenticate(password):
                session["user_id"] = climber.id
                return climber.to_dict(), 200

        return {"error": "401 Unauthorized"}, 401


class Logout(Resource):
    def delete(self):
        session["user_id"] = None

        return {}, 204


api.add_resource(Signup, "/signup", endpoint="signup")
api.add_resource(CheckSession, "/check_session", endpoint="check_session")
api.add_resource(Login, "/login", endpoint="login")
api.add_resource(Logout, "/logout", endpoint="logout")


class Climbers(Resource):
    def get(self):
        climbers = [climber.to_dict() for climber in Climber.query.all()]
        return make_response(climbers, 200)

    def post(self):
        data = request.get_json()
        new_climber = Climber()
        try:
            new_climber.name = data.get("name")
            new_climber.email = data.get("email")
            new_climber.password = data.get("password")
            db.session.add(new_climber)
            db.session.commit()
            return make_response(new_climber.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(Climbers, "/climbers")


class ClimbersById(Resource):
    def get(self, id):
        climber = Climber.query.filter_by(id=id).first()
        if climber is None:
            return make_response({"error": "Climber not found"}, 404)
        return make_response(climber.to_dict(), 200)

    def delete(self, id):
        climber = Climber.query.filter_by(id=id).first()
        if climber:
            db.session.delete(climber)
            db.session.commit()
            return make_response({}, 204)
        return make_response({"error": "Climber not found"}, 404)

    def patch(self, id):
        climber = Climber.query.filter_by(id=id).first()
        if not climber:
            return make_response({"error": "Climber not found"}, 404)
        data = request.get_json()
        try:
            setattr(climber, "name", data["name"])
            setattr(climber, "email", data["email"])
            setattr(climber, "password", data["password"])
            db.session.add(climber)
            db.session.commit()
            return (
                climber.to_dict(),
                202,
            )
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(ClimbersById, "/climbers/<int:id>")


class Mountains(Resource):
    def get(self):
        mountains = [mountain.to_dict() for mountain in Mountain.query.all()]
        return make_response(mountains, 200)

    def post(self):
        data = request.get_json()
        new_mountain = Mountain()
        try:
            new_mountain.name = data.get("name")
            new_mountain.location = data.get("location")
            new_mountain.type = data.get("type")
            new_mountain.grade = data.get("grade")
            new_mountain.latitude = data.get("latitude")
            new_mountain.longitude = data.get("longitude")
            new_mountain.image = data.get("image")
            db.session.add(new_mountain)
            db.session.commit()
            return make_response(new_mountain.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(Mountains, "/mountains")


class MountainsById(Resource):
    def get(self, id):
        mountain = Mountain.query.filter_by(id=id).first()
        if mountain is None:
            return make_response({"error": "Mountain not found"}, 404)
        return make_response(mountain.to_dict(), 200)

    def delete(self, id):
        mountain = Mountain.query.filter_by(id=id).first()
        if mountain:
            db.session.delete(mountain)
            db.session.commit()
            return make_response({}, 204)
        return make_response({"error": "Mountain not found"}, 404)

    def patch(self, id):
        mountain = Mountain.query.filter_by(id=id).first()
        if not mountain:
            return make_response({"error": "Mountain not found"}, 404)
        data = request.get_json()
        try:
            setattr(mountain, "name", data["name"])
            setattr(mountain, "location", data["location"])
            setattr(mountain, "type", data["type"])
            setattr(mountain, "grade", data["grade"])
            setattr(mountain, "latitude", data["latitude"])
            setattr(mountain, "latitude", data["latitude"])
            setattr(mountain, "image", data["image"])
            db.session.add(mountain)
            db.session.commit()
            return (
                mountain.to_dict(),
                202,
            )
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(MountainsById, "/mountains/<int:id>")


class Badges(Resource):
    def get(self):
        badges = [badge.to_dict() for badge in Badge.query.all()]
        return make_response(badges, 200)

    def post(self):
        data = request.get_json()
        new_badge = Badge()
        try:
            new_badge.date = data.get("date")
            new_badge.completed = data.get("completed")
            new_badge.climber_id = data.get("climber_id")
            new_badge.mountain_id = data.get("mountain_id")
            db.session.add(new_badge)
            db.session.commit()
            return make_response(new_badge.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(Badges, "/badges")


class BadgesById(Resource):
    def get(self, id):
        badge = Badge.query.filter_by(id=id).first()
        if badge is None:
            return make_response({"error": "Badge not found"}, 404)
        return make_response(badge.to_dict(only=("id", "climbers", "mountains")), 200)

    def delete(self, id):
        badge = Badge.query.filter_by(id=id).first()
        if badge:
            db.session.delete(badge)
            db.session.commit()
            return make_response({}, 204)
        return make_response({"error": "Badge not found"}, 404)

    def patch(self, id):
        badge = Badge.query.filter_by(id=id).first()
        if not badge:
            return make_response({"error": "Badge not found"}, 404)
        data = request.get_json()
        try:
            setattr(badge, "date", data["date"])
            setattr(badge, "completed", data["completed"])
            setattr(badge, "climber_id", data["climber_id"])
            setattr(badge, "mountain_id", data["mountain_id"])
            db.session.add(badge)
            db.session.commit()
            return (
                badge.to_dict(),
                202,
            )
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(BadgesById, "/badges/<int:id>")


if __name__ == "__main__":
    app.run(port=5555, debug=True)
