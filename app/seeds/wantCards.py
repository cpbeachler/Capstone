from app.models import db, WantCard


def seed_wantCards():
    wantCard0 = WantCard(userId=1, cardId='Torrential Gearhulk')
    wantCard1 = WantCard(userId=1, cardId='Cataclysmic Gearhulk')
    wantCard2 = WantCard(userId=1, cardId='Combustible Gearhulk')
    wantCard3 = WantCard(userId=1, cardId='Verdurous Gearhulk')
    wantCard4 = WantCard(userId=1, cardId='Noxious Gearhulk')

    db.session.add(wantCard0)
    db.session.add(wantCard1)
    db.session.add(wantCard2)
    db.session.add(wantCard3)
    db.session.add(wantCard4)

    db.session.commit()


def undo_wantCards():
    db.session.execute('TRUNCATE wantCards RESTART IDENTITY CASCADE;')
    db.session.commit()
