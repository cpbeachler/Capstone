"""add correct location

Revision ID: b49cc1a3ee09
Revises: 2e4d1da08cb0
Create Date: 2021-05-25 19:27:00.286345

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b49cc1a3ee09'
down_revision = '2e4d1da08cb0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('location', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'location')
    # ### end Alembic commands ###