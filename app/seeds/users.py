# from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password', location=29681)

    demo2 = User(username='Caleb', email='demo2@aa.io',
                password='password', location=29681)

    demo3 = User(username='Malcolm', email='demo3@aa.io',
                password='password', location=29681)

    demo4 = User(username='Phillip', email='demo4@aa.io',
                password='password', location=29681)

    demo5 = User(username='Eric', email='demo5@aa.io',
                password='password', location=29681)

    demo6 = User(username='Emily', email='demo6@aa.io',
                password='password', location=29681)

    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
