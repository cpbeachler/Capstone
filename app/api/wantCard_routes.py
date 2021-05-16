from flask import Blueprint, jsonify, request
from flask_login import current_user
from ..forms.wantCard_form import wantCardForm
from app.models import db, WantCard

want_routes = Blueprint('wantCards', __name__)


@want_routes.route('/<int:id>')
def wantCards(id):
    wantCards = WantCard.query.filter_by(userId=id).all()
    return {'wantCards': [card.to_dict() for card in wantCards]}


@want_routes.route('/', methods=['POST'])
def create_wantCard():
    form = wantCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    newWantCard = WantCard(
        userId=current_user.id,
        cardId=form.data['cardId']
    )
    db.session.add(newWantCard)
    db.session.commit()
    return newWantCard.to_dict()


@want_routes.route('/<string:cardId>', methods=['DELETE'])
def delete_wantCard(cardId):
    userId = current_user.id
    content = request.get_json()
    cardId = content['id']
    deleteCard = WantCard.query.filter_by(userId=userId, cardId=cardId).first()
    db.session.delete(deleteCard)
    db.session.commit()
    return {'success': "card deleted"}
