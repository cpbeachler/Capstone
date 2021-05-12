from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import HaveCard


class haveCardForm(FlaskForm):
    cardId = StringField('cardId', validators=[DataRequired()])
