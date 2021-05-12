from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import WantCard


class wantCardForm(FlaskForm):
    cardId = StringField('cardId', validators=[DataRequired()])
