from flask import Blueprint, jsonify, request
from ..forms.haveCard_form import haveCardForm
from app.models import db, HaveCard

have_routes = Blueprint('haveCards', __name__)


@have_routes.route('/')
def haveCards():
    haveCards = HaveCard.query.all()
    return {'haveCards': [haveCards.to_dict() for card in haveCards]}


@have_routes.route('/', methods=['POST'])
def create_haveCard():
    form = haveCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    haveCard = haveCard(
        userId=id,
        cardId=form.data['cardId']
    )
    db.session.add(haveCard)
    db.session.commit()
    return haveCard.to_dict()


@have_routes.route('/', methods=['DELETE'])
def delete_haveCard(cardId):
    card = HaveCard.query.get(cardId)
    db.session.delete(card)
    db.session.commit()
    return {'success': "card deleted"}
