from app.models import db, WantCard


def seed_wantCards():
    wantCard0 = WantCard(userId=1, cardId='torrential gearhulk')
    wantCard1 = WantCard(userId=1, cardId='cataclysmic gearhulk')
    wantCard2 = WantCard(userId=1, cardId='combustible gearhulk')
    wantCard3 = WantCard(userId=1, cardId='verdurous gearhulk')
    wantCard4 = WantCard(userId=1, cardId='noxious gearhulk')
    wantCard5 = WantCard(userId=2, cardId='dark ritual')

    db.session.add(wantCard0)
    db.session.add(wantCard1)
    db.session.add(wantCard2)
    db.session.add(wantCard3)
    db.session.add(wantCard4)
    db.session.add(wantCard5)

    db.session.commit()


def undo_wantCards():
    db.session.execute('TRUNCATE wantCards RESTART IDENTITY CASCADE;')
    db.session.commit()
