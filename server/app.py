#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from models import Climber, Mountain, Badge

from flask import request, make_response
from flask_restful import Resource


# Local imports
from config import app, db, api


@app.route("/")
def index():
    return "<h1>Project Server</h1>"


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
        return make_response(badge.to_dict(), 200)

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
