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
        # Need to create mountains
        # cheese = Pizza(name="Emma", ingredients="Dough, Tomato Sauce, Cheese")
        # pepperoni = Pizza(
        #     name="Geri", ingredients="Dough, Tomato Sauce, Cheese, Pepperoni"
        # )
        # california = Pizza(
        #     name="Melanie", ingredients="Dough, Sauce, Ricotta, Red peppers, Mustard"
        # )
        # pizzas = [cheese, pepperoni, california]

        print("Creating badges...")
        # Need to create badges
        # pr1 = RestaurantPizza(restaurant=shack, pizza=cheese, price=1)
        # pr2 = RestaurantPizza(restaurant=bistro, pizza=pepperoni, price=4)
        # pr3 = RestaurantPizza(restaurant=palace, pizza=california, price=5)
        # restaurantPizzas = [pr1, pr2, pr3]
        # db.session.add_all(restaurants)
        # db.session.add_all(pizzas)
        # db.session.add_all(restaurantPizzas)
        # db.session.commit()

        print("Seeding done!")
