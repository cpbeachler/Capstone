from app.models import db, HaveCard


def seed_haveCards():
    haveCard0 = HaveCard(userId=1, cardId='Ancestral Recall')
    haveCard1 = HaveCard(userId=1, cardId='Healing Salve')
    haveCard2 = HaveCard(userId=1, cardId='Lightning Bolt')
    haveCard3 = HaveCard(userId=1, cardId='Giant Growth')
    haveCard4 = HaveCard(userId=1, cardId='Dark Ritual')

    db.session.add(haveCard0)
    db.session.add(haveCard1)
    db.session.add(haveCard2)
    db.session.add(haveCard3)
    db.session.add(haveCard4)

    db.session.commit()


def undo_haveCards():
    db.session.execute('TRUNCATE haveCards RESTART IDENTITY CASCADE;')
    db.session.commit()
