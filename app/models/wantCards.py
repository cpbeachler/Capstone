from .db import db

class WantCard(db.Model):
    __tablename__ = 'wantCards'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    cardId = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            "id" : self.id,
            "userId" : self.userId,
            "cardId" : self.cardId
        }
