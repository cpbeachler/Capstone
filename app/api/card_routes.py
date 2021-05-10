from flask import Blueprint, jsonify
from app.models import haveCards
from app.models import wantCards

card_routes = Blueprint('cards', __name__)
