from flask import Blueprint, jsonify, request
from flask_login import current_user
from ..forms.haveCard_form import haveCardForm
from app.models import db, HaveCard

have_routes = Blueprint('haveCards', __name__)


@have_routes.route('/<int:id>')
def haveCards(id):
    haveCards = HaveCard.query.filter_by(userId=id).all()
    return {'haveCards': [card.to_dict() for card in haveCards]}


@have_routes.route('/', methods=['POST'])
def create_haveCard():
    form = haveCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    newHaveCard = HaveCard(
        userId=current_user.id,
        cardId=form.data['cardId']
    )
    db.session.add(newHaveCard)
    db.session.commit()
    return newHaveCard.to_dict()


@have_routes.route('/<string:cardId>', methods=['DELETE'])
def delete_haveCard(cardId):
    userId = current_user.id
    haveCards = HaveCard.query.filter_by(userId=id).all()
    # print(userId)
    # print(cardId)
    for card in haveCards.to_dict():
        if card.cardId == cardId:
            print('-_-_-_-_-_-_-|', card, '|-_-_-_-_-_-_-')
            deleteCard = card

    print('-_-_-_-_-_-_-|', deleteCard, '|-_-_-_-_-_-_-')
    # db.session.delete(deleteCard)
    # db.session.commit()
    return {'success': "card deleted"}
