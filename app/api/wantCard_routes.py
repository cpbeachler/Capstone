from flask import Blueprint, jsonify, request
from ..forms.wantCard_form import wantCardForm
from app.models import db, WantCard

want_routes = Blueprint('wantCards', __name__)


@want_routes.route('/')
def wantCards():
    wantCards = WantCard.query.all()
    return {'wantCards': [wantCards.to_dict() for card in wantCards]}


@want_routes.route('/', methods=['POST'])
def create_wantCard():
    form = wantCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    wantCard = wantCard(
        userId=id,
        cardId=form.data['cardId']
    )
    db.session.add(wantCard)
    db.session.commit()
    return wantCard.to_dict()


@want_routes.route('/', methods=['DELETE'])
def delete_wantCard(cardId):
    card = WantCard.query.get(cardId)
    db.session.delete(card)
    db.session.commit()
    return {'success': "card deleted"}