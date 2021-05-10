from flask import Blueprint, jsonify
from app.models import WantCard

card_routes = Blueprint('wantCards', __name__)


@deck_routes.route('/want')
def wantCards():
    wantCards = WantCard.query.all()
    return {'wantCards': [wantCards.to_dict() for card in wantCards]}
