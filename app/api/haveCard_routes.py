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
    haveCard = haveCard(
        userId=current_user.id,
        cardId=form.data['cardId']
    )
    db.session.add(haveCard)
    db.session.commit()
    return haveCard.to_dict()


@have_routes.route('/', methods=['DELETE'])
def delete_haveCard(id):
    card = HaveCard.query.get(id)
    db.session.delete(card)
    db.session.commit()
    return {'success': "card deleted"}
