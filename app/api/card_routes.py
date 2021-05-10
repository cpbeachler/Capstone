from flask import Blueprint, jsonify
from app.models import HaveCard
from app.models import WantCard

card_routes = Blueprint('cards', __name__)


@deck_routes.route('/card')
def card():
    return {'cards': []}
