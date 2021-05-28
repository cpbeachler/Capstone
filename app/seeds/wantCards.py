from app.models import db, WantCard


def seed_wantCards():
    wantCard0 = WantCard(userId=1, cardId='torrential gearhulk')
    wantCard1 = WantCard(userId=1, cardId='cataclysmic gearhulk')
    wantCard2 = WantCard(userId=1, cardId='combustible gearhulk')
    wantCard3 = WantCard(userId=1, cardId='verdurous gearhulk')
    wantCard4 = WantCard(userId=1, cardId='noxious gearhulk')
    wantCard5 = WantCard(userId=1, cardId='jace beleren')
    wantCard6 = WantCard(userId=1, cardId='chandra nalaar')
    wantCard7 = WantCard(userId=1, cardId='liliana vess')
    wantCard8 = WantCard(userId=1, cardId='nissa revane')
    wantCard9 = WantCard(userId=1, cardId='ajani goldmane')
    wantCard10 = WantCard(userId=2, cardId='cryptic command')
    wantCard11 = WantCard(userId=3, cardId='incendiary command')
    wantCard12 = WantCard(userId=4, cardId='austere command')
    wantCard13 = WantCard(userId=5, cardId='profane command')

    db.session.add(wantCard0)
    db.session.add(wantCard1)
    db.session.add(wantCard2)
    db.session.add(wantCard3)
    db.session.add(wantCard4)
    db.session.add(wantCard5)
    db.session.add(wantCard6)
    db.session.add(wantCard7)
    db.session.add(wantCard8)
    db.session.add(wantCard9)
    db.session.add(wantCard10)
    db.session.add(wantCard11)
    db.session.add(wantCard12)
    db.session.add(wantCard13)


    db.session.commit()


def undo_wantCards():
    db.session.execute('TRUNCATE wantCards RESTART IDENTITY CASCADE;')
    db.session.commit()
