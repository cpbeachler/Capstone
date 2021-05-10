from flask import Blueprint, jsonify
from app.models import HaveCard

card_routes = Blueprint('haveCards', __name__)


@deck_routes.route('/have')
def haveCards():
    haveCards = HaveCard.query.all()
    return {'haveCards': [haveCards.to_dict() for card in haveCards]}
