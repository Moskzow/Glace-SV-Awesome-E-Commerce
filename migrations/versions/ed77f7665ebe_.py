"""empty message

Revision ID: ed77f7665ebe
Revises: 802a22d62c0e
Create Date: 2021-07-07 16:45:31.885857

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ed77f7665ebe'
down_revision = '802a22d62c0e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'cakes', ['id_cakes'])
    op.create_unique_constraint(None, 'gifts', ['id_gifts'])
    op.create_unique_constraint(None, 'glazed', ['id_glazed'])
    op.create_unique_constraint(None, 'testclass', ['id'])
    op.create_unique_constraint(None, 'treats', ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'treats', type_='unique')
    op.drop_constraint(None, 'testclass', type_='unique')
    op.drop_constraint(None, 'glazed', type_='unique')
    op.drop_constraint(None, 'gifts', type_='unique')
    op.drop_constraint(None, 'cakes', type_='unique')
    # ### end Alembic commands ###
