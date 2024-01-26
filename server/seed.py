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
        # Climber.query.delete()
        Mountain.query.delete()
        Badge.query.delete()

        # print("Creating climbers...")

        # climber1 = Climber(
        #     name="Meaghan", email="meaghan@test.com", _password_hash="test"
        # )
        # climber2 = Climber(
        #     name="Eileen", email="eileen@test.com", _password_hash="test"
        # )
        # climbers = [climber1, climber2]

        print("Creating mountains...")
        mountain1 = Mountain(
            name="Hobbit Book",
            location="Yosemite",
            type="Trad",
            grade="5.7",
            latitude=37.8623,
            longitude=-119.42265,
            image="https://mountainproject.com/assets/photos/climb/107620452_smallMed_1494200704.jpg?cache=1701317479",
        )
        mountain2 = Mountain(
            name="Zorro",
            location="Yosemite",
            type="Bouldering",
            grade="V4",
            latitude=37.73744,
            longitude=-119.57605,
            image="https://mountainproject.com/assets/photos/climb/119008672_medium_1591659936.jpg?cache=1667690541",
        )
        mountain3 = Mountain(
            name="The Nutcracker Suite",
            location="Yosemite",
            type="Trad",
            grade="5.8",
            latitude=37.73059,
            longitude=-119.619,
            image="https://i0.wp.com/TheMtsAreCalling.com/wp-content/uploads/2023/05/5C6C19EC-D823-48E3-BFDA-8177BC982793-scaled.jpeg?resize=1152%2C1536&ssl=1",
        )
        mountain4 = Mountain(
            name="The Nose",
            location="Yosemite",
            type="Trad",
            grade="5.9",
            latitude=37.73051,
            longitude=-119.63828,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXERHaSy7nHGrfbVH6wIYAt2oLArQPuUhhw&usqp=CAU",
        )
        mountain5 = Mountain(
            name="Baby Back Ribs",
            location="Red River Gorge",
            type="Sport",
            grade="5.8",
            latitude=37.64271,
            longitude=-83.71462,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBy1t6Ivw7GoBcyWk8UJLxymrlytsIGadRVg&usqp=CAU",
        )
        mountain6 = Mountain(
            name="Bring Out Your Dead",
            location="Red River Gorge",
            type="Trad",
            grade="5.9",
            latitude=37.64911,
            longitude=-83.67518,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5A9qtYwBdYqvIfrRd7RD54uMQUat5ulvew&usqp=CAU",
        )
        mountain7 = Mountain(
            name="When Doves Cry",
            location="Red River Gorge",
            type="Bouldering",
            grade="V5",
            latitude=37.67744,
            longitude=-83.68217,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLhvgLTiUJ45Ul8zgCUhAdlU1EcJedQVtHt5RuZ3xBVxtzBSqVh_dImxJolXBMWhkZLo&usqp=CAU",
        )
        mountain8 = Mountain(
            name="Banshee",
            location="Red River Gorge",
            type="Sport",
            grade="5.11c",
            latitude=37.73372,
            longitude=-83.63884,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRGa8yri4ubFdDZi7Ssx6mXX8ipAqiIeh9A&usqp=CAU",
        )
        mountain9 = Mountain(
            name="Breakfast Burrito",
            location="Red River Gorge",
            type="Sport",
            grade="5.10c",
            latitude=37.65292,
            longitude=-83.72495,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSE__a9hnAJkajflRm0XXChjUKpxZpAm2yxg&usqp=CAU",
        )
        mountain10 = Mountain(
            name="The UFO",
            location="Red River Gorge",
            type="Bouldering",
            grade="V6",
            latitude=37.81801,
            longitude=-83.67414,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHulQOC2BolHoOQEXxH3rLIzsdGwNXW-4PQ&usqp=CAU",
        )
        mountain11 = Mountain(
            name="Autobot",
            location="Alpine Rock",
            type="Bouldering",
            grade="V5",
            latitude=40.30492,
            longitude=-105.66025,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Sn4nW3BXGkmRa_0I8pq29gYe96hAIfogNw&usqp=CAU",
        )
        mountain12 = Mountain(
            name="Celestial Gate",
            location="Alpine Rock",
            type="Trad",
            grade="5.12a",
            latitude=40.35209,
            longitude=-105.65432,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTxieweQBPALHtxX9SmTPh1yhAuIs0FbOCA&usqp=CAU",
        )
        mountain13 = Mountain(
            name="The Barb",
            location="Alpine Rock",
            type="Trad",
            grade="5.10",
            latitude=40.2567,
            longitude=-105.63834,
            image="https://mountainproject.com/assets/photos/climb/117341136_medium_1562827217.jpg?cache=1664476893",
        )
        mountain14 = Mountain(
            name="Wham Ridge",
            location="Alpine Rock",
            type="Trad",
            grade="5.4",
            latitude=37.6894,
            longitude=-107.602,
            image="https://mountainproject.com/assets/photos/climb/107250552_medium_1494176419.jpg?cache=1701317041",
        )
        mountain15 = Mountain(
            name="Burning Calves",
            location="New River Gorge",
            type="Trad",
            grade="5.10b",
            latitude=38.05238,
            longitude=-81.03324,
            image="https://mountainproject.com/assets/photos/climb/109617109_medium_1494358107.jpg?cache=1701318687",
        )
        mountain16 = Mountain(
            name="Thunderstruck",
            location="New River Gorge",
            type="Sport",
            grade="5.12b",
            latitude=38.04953,
            longitude=-81.07039,
            image="https://mountainproject.com/assets/photos/climb/117009126_medium_1558615028.jpg?cache=1665774815",
        )
        mountain17 = Mountain(
            name="Aesthetica",
            location="New River Gorge",
            type="Sport",
            grade="5.11c",
            latitude=38.05596,
            longitude=-81.05393,
            image="https://mountainproject.com/assets/photos/climb/112823446_medium_1494317059.jpg?cache=1702072393",
        )
        mountain18 = Mountain(
            name="Slim Pickins",
            location="Hueco Tanks",
            type="Bouldering",
            grade="V5",
            latitude=31.9108,
            longitude=-106.0372,
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxi9LW1Ynz0yHeXWGm9Xh7er20k261sVtIIOlB95S8sfijQgmB2TQXhS1nu_A-ezU6rQw&usqp=CAU",
        )
        mountain19 = Mountain(
            name="See Spot Run",
            location="Hueco Tanks",
            type="Bouldering",
            grade="V6",
            latitude=31.9222,
            longitude=-106.0434,
            image="https://mountainproject.com/assets/photos/climb/106304247_medium_1494095988.jpg?cache=1701315541",
        )
        mountain20 = Mountain(
            name="Warm Up Roof",
            location="Hueco Tanks",
            type="Bouldering",
            grade="V4",
            latitude=31.91964,
            longitude=-106.03994,
            image="https://mountainproject.com/assets/photos/climb/118044333_medium_1573773213.jpg?cache=1636499727",
        )
        mountain21 = Mountain(
            name="Baby Martini",
            location="Hueco Tanks",
            type="Bouldering",
            grade="V6",
            latitude=31.92168,
            longitude=-106.04317,
            image="https://mountainproject.com/assets/photos/climb/118740481_medium_1586306192.jpg?cache=1698949069",
        )
        mountain22 = Mountain(
            name="Saturday Night Live",
            location="Joshua Tree",
            type="Bouldering",
            grade="V4",
            latitude=34.01167,
            longitude=-116.16855,
            image="https://mountainproject.com/assets/photos/climb/106117058_medium_1558650297.jpg?cache=1608922349",
        )
        mountain23 = Mountain(
            name="Heart and Sole",
            location="Joshua Tree",
            type="Trad",
            grade="5.10a",
            latitude=34.02513,
            longitude=-116.15617,
            image="https://mountainproject.com/assets/photos/climb/118072623_medium_1574286203.jpg?cache=1702073524",
        )
        mountain24 = Mountain(
            name="Big Moe",
            location="Joshua Tree",
            type="Trad",
            grade="5.11a",
            latitude=34.02451,
            longitude=-116.15802,
            image="https://mountainproject.com/assets/photos/climb/107011229_large_1494158644.jpg?cache=1643078224",
        )
        mountain25 = Mountain(
            name="Pigpen",
            location="Joshua Tree",
            type="Bouldering",
            grade="V4",
            latitude=34.0153,
            longitude=-116.15811,
            image="https://mountainproject.com/assets/photos/climb/116606181_medium_1552601302.jpg?cache=1702073266",
        )
        mountain26 = Mountain(
            name="Streetcar Named Desire",
            location="Joshua Tree",
            type="Bouldering",
            grade="V6",
            latitude=34.02758,
            longitude=-116.14483,
            image="https://mountainproject.com/assets/photos/climb/118313184_medium_1580778152.jpg?cache=1702073586",
        )
        mountain27 = Mountain(
            name="Palm-o-granite",
            location="Joshua Tree",
            type="Bouldering",
            grade="V7",
            latitude=33.98603,
            longitude=-116.15961,
            image="https://mountainproject.com/assets/photos/climb/118669102_medium_1584569458.jpg?cache=1702073630",
        )
        mountain28 = Mountain(
            name="Frogland",
            location="Red Rocks",
            type="Trad",
            grade="5.8",
            latitude=36.03509,
            longitude=-115.46345,
            image="https://image.thecrag.com/427x320/7b/73/7b73ee6bf65654457d4e46da16c880f83d417595",
        )
        mountain29 = Mountain(
            name="Dream of Wild Turkeys",
            location="Red Rocks",
            type="Trad",
            grade="5.10a",
            latitude=36.03518,
            longitude=-115.46652,
            image="https://mountainproject.com/assets/photos/climb/5300100_medium_1557853977.jpg?cache=1701314601",
        )
        mountain30 = Mountain(
            name="Cloud Tower",
            location="Red Rocks",
            type="Trad",
            grade="5.12a",
            latitude=36.11237,
            longitude=-115.48908,
            image="https://mountainproject.com/assets/photos/climb/106392755_medium_1494104543.jpg?cache=1701315705",
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

        climber1 = Climber.query.filter_by(id=1).first()
        climber2 = Climber.query.filter_by(id=2).first()

        b1 = Badge(
            climber=climber1,
            mountain=mountain2,
            date="10/31/2023",
            completed="Attempted",
        )
        b2 = Badge(
            climber=climber1,
            mountain=mountain5,
            date="05/27/2023",
            completed="Completed",
        )
        b3 = Badge(
            climber=climber1,
            mountain=mountain6,
            date="09/15/2022",
            completed="To Be Conquered",
        )
        b4 = Badge(
            climber=climber1,
            mountain=mountain1,
            date="01/10/2024",
            completed="Attempted",
        )
        b5 = Badge(
            climber=climber1,
            mountain=mountain8,
            date="07/31/2023",
            completed="Completed",
        )
        b6 = Badge(
            climber=climber1,
            mountain=mountain12,
            date="09/15/2022",
            completed="Attempted",
        )
        b7 = Badge(
            climber=climber2,
            mountain=mountain14,
            date="10/31/2023",
            completed="To Be Conquered",
        )
        b8 = Badge(
            climber=climber2,
            mountain=mountain17,
            date="05/27/2023",
            completed="Attempted",
        )
        b9 = Badge(
            climber=climber2,
            mountain=mountain18,
            date="09/15/2022",
            completed="Completed",
        )
        b10 = Badge(
            climber=climber2,
            mountain=mountain19,
            date="01/10/2024",
            completed="Completed",
        )
        b11 = Badge(
            climber=climber2,
            mountain=mountain23,
            date="07/31/2023",
            completed="To Be Conquered",
        )
        badges = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11]
        # db.session.add_all(climbers)
        db.session.add_all(mountains)
        db.session.add_all(badges)
        db.session.commit()

        print("Seeding done!")
