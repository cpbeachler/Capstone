from app.models import db, HaveCard


def seed_haveCards():
    haveCard0 = HaveCard(userId=1, cardId='grave titan')
    haveCard1 = HaveCard(userId=1, cardId='inferno titan')
    haveCard2 = HaveCard(userId=1, cardId='primeval titan')
    haveCard3 = HaveCard(userId=1, cardId='frost titan')
    haveCard4 = HaveCard(userId=1, cardId='sun titan')
    haveCard5 = HaveCard(userId=1, cardId='cryptic command')
    haveCard6 = HaveCard(userId=1, cardId='primal command')
    haveCard7 = HaveCard(userId=1, cardId='austere command')
    haveCard8 = HaveCard(userId=1, cardId='profane command')
    haveCard9 = HaveCard(userId=1, cardId='incendiary command')
    haveCard10 = HaveCard(userId=2, cardId='jace beleren')
    haveCard11 = HaveCard(userId=3, cardId='chandra nalaar')
    haveCard12 = HaveCard(userId=4, cardId='ajani goldmane')
    haveCard13 = HaveCard(userId=5, cardId='liliana vess')

    db.session.add(haveCard0)
    db.session.add(haveCard1)
    db.session.add(haveCard2)
    db.session.add(haveCard3)
    db.session.add(haveCard4)
    db.session.add(haveCard5)
    db.session.add(haveCard6)
    db.session.add(haveCard7)
    db.session.add(haveCard8)
    db.session.add(haveCard9)
    db.session.add(haveCard10)
    db.session.add(haveCard11)
    db.session.add(haveCard12)
    db.session.add(haveCard13)

    db.session.commit()


def undo_haveCards():
    db.session.execute('TRUNCATE haveCards RESTART IDENTITY CASCADE;')
    db.session.commit()
