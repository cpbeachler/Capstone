from flask import Blueprint, jsonify
from flask_login import current_user
from app.models import User, WantCard, HaveCard

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def users(wantedCards):
    allMatches = WantCard.query.filter()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def userMatches(id):
    userLocation = current_user.location
    userId = current_user.id
    locationMatches = [user.to_dict() for user in User.query.filter_by(location=userLocation).all()]
    curWantCardsResponse = WantCard.query.filter_by(userId=id).all()
    curWantCards = [card.cardId for card in curWantCardsResponse]
    curHaveCardsResponse = HaveCard.query.filter_by(userId=id).all()
    curHaveCards = [card.cardId for card in curHaveCardsResponse]
    matches = []
    for user in locationMatches:
        matchDictionary = {}
        matchId = user.get('id')
        matchHave = [card.to_dict() for card in HaveCard.query.filter_by(userId=matchId).all()]
        matchWant = [card.to_dict() for card in WantCard.query.filter_by(userId=matchId).all()]
        for matchHaveCard in matchHave:
            if matchHaveCard.get('cardId') in curWantCards:
                matchDictionary['trader'] = user.get('username')
                matchDictionary['contact'] = user.get('email')
                matchDictionary['wantCard'] = matchHaveCard.get('cardId')
                for matchWantCard in matchWant:
                    if matchWantCard.get('cardId') in curHaveCards:
                        matchDictionary['haveCard'] = matchWantCard.get('cardId')
                        matches.append(matchDictionary)
    return{"matches": matches}
