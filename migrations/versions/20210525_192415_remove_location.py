"""remove location

Revision ID: 2e4d1da08cb0
Revises: 1be698799618
Create Date: 2021-05-25 19:24:15.265439

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2e4d1da08cb0'
down_revision = '1be698799618'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'location')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('location', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    # ### end Alembic commands ###