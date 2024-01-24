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

        # print("Creating climbers...")
        # commenting out while I work through user authorization

        # climber1 = Climber(name="Meaghan", email="meaghan@test.com", password="test")
        # climber2 = Climber(name="Eileen", email="eileen@test.com", password="test")
        # climbers = [climber1, climber2]

        print("Creating mountains...")
        mountain1 = Mountain(
            name="Hobbit Book",
            location="Yosemite",
            type="Trad",
            grade="5.7",
            latitude=37.8623,
            longitude=-119.42265,
        )
        mountain2 = Mountain(
            name="Zorro",
            location="Yosemite",
            type="Bouldering",
            grade="V4",
            latitude=37.73744,
            longitude=-119.57605,
        )
        mountain3 = Mountain(
            name="The Nutcracker Suite",
            location="Yosemite",
            type="Trad",
            grade="5.8",
            latitude=37.73059,
            longitude=-119.619,
        )
        mountain4 = Mountain(
            name="The Nose",
            location="Yosemite",
            type="Trad",
            grade="5.9",
            latitude=37.73051,
            longitude=-119.63828,
        )
        mountain5 = Mountain(
            name="Baby Back Ribs",
            location="Red River Gorge",
            type="Sport",
            grade="5.8",
            latitude=37.64271,
            longitude=-83.71462,
        )
        mountain6 = Mountain(
            name="Bring Out Your Dead",
            location="Red River Gorge",
            type="Trad",
            grade="5.9",
            latitude=37.64911,
            longitude=-83.67518,
        )
        mountain7 = Mountain(
            name="When Doves Cry",
            location="Red River Gorge",
            type="Bouldering",
            grade="V5",
            latitude=37.67744,
            longitude=-83.68217,
        )
        mountain8 = Mountain(
            name="Banshee",
            location="Red River Gorge",
            type="Sport",
            grade="5.11c",
            latitude=37.73372,
            longitude=-83.63884,
        )
        mountain9 = Mountain(
            name="Breakfast Burrito",
            location="Red River Gorge",
            type="Sport",
            grade="5.10c",
            latitude=37.65292,
            longitude=-83.72495,
        )
        mountain10 = Mountain(
            name="The UFO",
            location="Red River Gorge",
            type="Bouldering",
            grade="V6",
            latitude=37.81801,
            longitude=-83.67414,
        )
        mountain11 = Mountain(
            name="Autobot",
            location="Alpine Rock",
            type="Bouldering",
            grade="V5",
            latitude=40.30492,
            longitude=-105.66025,
        )
        mountain12 = Mountain(
            name="Celestial Gate",
            location="Alpine Rock",
            type="Trad",
            grade="5.12a",
            latitude=40.35209,
            longitude=-105.65432,
        )
        mountain13 = Mountain(
            name="The Barb",
            location="Alpine Rock",
            type="Trad",
            grade="5.10",
            latitude=40.2567,
            longitude=-105.63834,
        )
        mountain14 = Mountain(
            name="Wham Ridge",
            location="Alpine Rock",
            type="Trad",
            grade="5.4",
            latitude=37.6894,
            longitude=-107.602,
        )
        mountain15 = Mountain(
            name="Burning Calves",
            location="New River Gorge",
            type="Trad",
            grade="5.10b",
            latitude=38.05238,
            longitude=-81.03324,
        )
        mountain16 = Mountain(
            name="Thunderstruck",
            location="New River Gorge",
            type="Sport",
            grade="5.12b",
            latitude=38.04953,
            longitude=-81.07039,
        )
        mountain17 = Mountain(
            name="Aesthetica",
            location="New River Gorge",
            type="Sport",
            grade="5.11c",
            latitude=38.05596,
            longitude=-81.05393,
        )
        mountain18 = Mountain(
            name="Slim Pickins",
            location="Hueco Tanks",
            type="Bouldering",
            grade="V5",
            latitude=31.9108,
            longitude=-106.0372,
        )
        mountain19 = Mountain(
            name="See Spot Run",
            location="Hueco Tanks",
            type="Bouldering",
            grade="V6",
            latitude=31.9222,
            longitude=-106.0434,
        )
        mountain20 = Mountain(
            name="Warm Up Roof",
            location="Hueco Tanks",
            type="Bouldering",
            grade="V4",
            latitude=31.91964,
            longitude=-106.03994,
        )
        mountain21 = Mountain(
            name="Baby Martini",
            location="Hueco Tanks",
            type="Bouldering",
            grade="V6",
            latitude=31.92168,
            longitude=-106.04317,
        )
        mountain22 = Mountain(
            name="Saturday Night Live",
            location="Joshua Tree",
            type="Bouldering",
            grade="V4",
            latitude=34.01167,
            longitude=-116.16855,
        )
        mountain23 = Mountain(
            name="Heart and Sole",
            location="Joshua Tree",
            type="Trad",
            grade="5.10a",
            latitude=34.02513,
            longitude=-116.15617,
        )
        mountain24 = Mountain(
            name="Big Moe",
            location="Joshua Tree",
            type="Trad",
            grade="5.11a",
            latitude=34.02451,
            longitude=-116.15802,
        )
        mountain25 = Mountain(
            name="Pigpen",
            location="Joshua Tree",
            type="Bouldering",
            grade="V4",
            latitude=34.0153,
            longitude=-116.15811,
        )
        mountain26 = Mountain(
            name="Streetcar Named Desire",
            location="Joshua Tree",
            type="Bouldering",
            grade="V6",
            latitude=34.02758,
            longitude=-116.14483,
        )
        mountain27 = Mountain(
            name="Palm-o-granite",
            location="Joshua Tree",
            type="Bouldering",
            grade="V7",
            latitude=33.98603,
            longitude=-116.15961,
        )
        mountain28 = Mountain(
            name="Frogland",
            location="Red Rocks",
            type="Trad",
            grade="5.8",
            latitude=36.03509,
            longitude=-115.46345,
        )
        mountain29 = Mountain(
            name="Dream of Wild Turkeys",
            location="Red Rocks",
            type="Trad",
            grade="5.10a",
            latitude=36.03518,
            longitude=-115.46652,
        )
        mountain30 = Mountain(
            name="Cloud Tower",
            location="Red Rocks",
            type="Trad",
            grade="5.12a",
            latitude=36.11237,
            longitude=-115.48908,
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

        # print("Creating badges...")
        # b1 = Badge(
        #     climber=climber1, mountain=mountain2, date="10/31/2023", completed="Yes"
        # )
        # b2 = Badge(
        #     climber=climber1,
        #     mountain=mountain5,
        #     date="05/27/2023",
        #     completed="Attempted",
        # )
        # b3 = Badge(
        #     climber=climber1, mountain=mountain6, date="09/15/2022", completed="No"
        # )
        # b4 = Badge(
        #     climber=climber1, mountain=mountain1, date="01/10/2024", completed="Yes"
        # )
        # b5 = Badge(
        #     climber=climber1, mountain=mountain8, date="07/31/2023", completed="No"
        # )
        # b6 = Badge(
        #     climber=climber1,
        #     mountain=mountain12,
        #     date="09/15/2022",
        #     completed="Attempted",
        # )
        # b7 = Badge(
        #     climber=climber2, mountain=mountain14, date="10/31/2023", completed="Yes"
        # )
        # b8 = Badge(
        #     climber=climber2,
        #     mountain=mountain17,
        #     date="05/27/2023",
        #     completed="Attempted",
        # )
        # b9 = Badge(
        #     climber=climber2, mountain=mountain18, date="09/15/2022", completed="No"
        # )
        # b10 = Badge(
        #     climber=climber2, mountain=mountain19, date="01/10/2024", completed="Yes"
        # )
        # b11 = Badge(
        #     climber=climber2, mountain=mountain23, date="07/31/2023", completed="No"
        # )
        # badges = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11]
        # db.session.add_all(climbers)
        db.session.add_all(mountains)
        # db.session.add_all(badges)
        db.session.commit()

        print("Seeding done!")
