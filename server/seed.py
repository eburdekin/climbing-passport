#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Climber, Mountain, Badge

if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        # This will delete any existing rows
        # so you can run the seed file multiple times without having duplicate entries in your database

        print("Deleting data...")
        Climber.query.delete()
        Mountain.query.delete()
        Badge.query.delete()

        print("Creating climbers...")
        climber1 = Climber(name="Meaghan", email="meaghan@test.com", password="test")
        climber2 = Climber(name="Eileen", email="eileen@test.com", password="test")
        climbers = [climber1, climber2]

        print("Creating mountains...")
        mountain1 = Mountain(
            name="Hobbit Book", location="Yosemite", type="Trad", grade="5.7"
        )
        mountain2 = Mountain(
            name="Zorro", location="Yosemite", type="Bouldering", grade="V4"
        )
        mountain3 = Mountain(
            name="The Nutcracker Suite", location="Yosemite", type="Trad", grade="5.8"
        )
        mountain4 = Mountain(
            name="The Nutcracker Suite", location="Yosemite", type="Trad", grade="5.9"
        )
        mountain5 = Mountain(
            name="Baby Back Ribs", location="Red River Gorge", type="Sport", grade="5.8"
        )
        mountain6 = Mountain(
            name="Bring Out Your Dead",
            location="Red River Gorge",
            type="Trad",
            grade="5.9",
        )
        mountain7 = Mountain(
            name="When Doves Cry",
            location="Red River Gorge",
            type="Bouldering",
            grade="V5",
        )
        mountain8 = Mountain(
            name="Banshee", location="Red River Gorge", type="Sport", grade="5.11c"
        )
        mountain9 = Mountain(
            name="Breakfast Burrito",
            location="Red River Gorge",
            type="Sport",
            grade="5.10c",
        )
        mountain10 = Mountain(
            name="The UFO", location="Red River Gorge", type="Bouldering", grade="V6"
        )
        mountain11 = Mountain(
            name="Autobot", location="Alpine Rock", type="Bouldering", grade="V5"
        )
        mountain12 = Mountain(
            name="Celestial Gate", location="Alpine Rock", type="Trad", grade="5.12a"
        )
        mountain13 = Mountain(
            name="The Barb", location="Alpine Rock", type="Trad", grade="5.10"
        )
        mountain14 = Mountain(
            name="Wham Ridge", location="Alpine Rock", type="Trad", grade="5.4"
        )
        mountain15 = Mountain(
            name="Burning Calves",
            location="New River Gorge",
            type="Trad",
            grade="5.10b",
        )
        mountain16 = Mountain(
            name="Thunderstruck",
            location="New River Gorge",
            type="Sport",
            grade="5.12b",
        )
        mountain17 = Mountain(
            name="Aesthetica", location="New River Gorge", type="Sport", grade="5.11c"
        )
        mountain18 = Mountain(
            name="Slim Pickins", location="Hueco Tanks", type="Bouldering", grade="V5"
        )
        mountain19 = Mountain(
            name="See Spot Run", location="Hueco Tanks", type="Bouldering", grade="V6"
        )
        mountain20 = Mountain(
            name="Warm Up Roof", location="Hueco Tanks", type="Bouldering", grade="V4"
        )
        mountain21 = Mountain(
            name="Baby Martini", location="Hueco Tanks", type="Bouldering", grade="V6"
        )
        mountain22 = Mountain(
            name="Saturday Night Live",
            location="Joshua Tree",
            type="Bouldering",
            grade="V4",
        )
        mountain23 = Mountain(
            name="Heart and Sole", location="Joshua Tree", type="Trad", grade="5.10a"
        )
        mountain24 = Mountain(
            name="Big Moe", location="Joshua Tree", type="Trad", grade="5.11a"
        )
        mountain25 = Mountain(
            name="Pigpen", location="Joshua Tree", type="Bouldering", grade="V4"
        )
        mountain26 = Mountain(
            name="Streetcar Named Desire",
            location="Joshua Tree",
            type="Bouldering",
            grade="V6",
        )
        mountain27 = Mountain(
            name="Palm-o-granite", location="Joshua Tree", type="Bouldering", grade="V7"
        )
        mountain28 = Mountain(
            name="Frogland", location="Red Rocks", type="Trad", grade="5.8"
        )
        mountain29 = Mountain(
            name="Dream of Wild Turkeys",
            location="Red Rocks",
            type="Trad",
            grade="5.10a",
        )
        mountain30 = Mountain(
            name="Cloud Tower", location="Red Rocks", type="Trad", grade="5.12a"
        )
        mountains = [
            mountain1,
            mountain2,
            mountain3,
            mountain4,
            mountain5,
            mountain6,
            mountain7,
            mountain8,
            mountain9,
            mountain10,
            mountain11,
            mountain12,
            mountain13,
            mountain14,
            mountain15,
            mountain16,
            mountain17,
            mountain18,
            mountain19,
            mountain20,
            mountain21,
            mountain22,
            mountain23,
            mountain24,
            mountain25,
            mountain26,
            mountain27,
            mountain28,
            mountain29,
            mountain30,
        ]

        print("Creating badges...")
        b1 = Badge(
            climber=climber1, mountain=mountain2, date="2023-10-31", completed="Yes"
        )
        b2 = Badge(
            climber=climber1,
            mountain=mountain5,
            date="2023-05-27",
            completed="Attempted",
        )
        b3 = Badge(
            climber=climber1, mountain=mountain6, date="2022-09-15", completed="No"
        )
        b4 = Badge(
            climber=climber1, mountain=mountain1, date="2024-01-10", completed="Yes"
        )
        b5 = Badge(
            climber=climber1, mountain=mountain8, date="2023-07-31", completed="No"
        )
        b6 = Badge(
            climber=climber1,
            mountain=mountain12,
            date="2022-09-15",
            completed="Attempted",
        )
        b7 = Badge(
            climber=climber2, mountain=mountain14, date="2023-10-31", completed="Yes"
        )
        b8 = Badge(
            climber=climber2,
            mountain=mountain17,
            date="2023-05-27",
            completed="Attempted",
        )
        b9 = Badge(
            climber=climber2, mountain=mountain18, date="2022-09-15", completed="No"
        )
        b10 = Badge(
            climber=climber2, mountain=mountain19, date="2024-01-10", completed="Yes"
        )
        b11 = Badge(
            climber=climber2, mountain=mountain23, date="2023-07-31", completed="No"
        )
        badges = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11]
        db.session.add_all(climbers)
        db.session.add_all(mountains)
        db.session.add_all(badges)
        db.session.commit()

        print("Seeding done!")
