from app.models import db, HaveCard


def seed_haveCards():
    haveCard0 = HaveCard(userId=1, cardId='ancestral recall')
    haveCard1 = HaveCard(userId=1, cardId='healing salve')
    haveCard2 = HaveCard(userId=1, cardId='lightning bolt')
    haveCard3 = HaveCard(userId=1, cardId='giant growth')
    haveCard4 = HaveCard(userId=1, cardId='dark ritual')

    db.session.add(haveCard0)
    db.session.add(haveCard1)
    db.session.add(haveCard2)
    db.session.add(haveCard3)
    db.session.add(haveCard4)

    db.session.commit()


def undo_haveCards():
    db.session.execute('TRUNCATE haveCards RESTART IDENTITY CASCADE;')
    db.session.commit()
