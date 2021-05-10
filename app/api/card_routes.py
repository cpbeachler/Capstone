from flask import Blueprint, jsonify
from app.models import HaveCard
from app.models import WantCard

card_routes = Blueprint('cards', __name__)


@card_routes.route('/')
def card():
    return {'card': []}
