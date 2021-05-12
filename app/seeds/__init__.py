from flask.cli import AppGroup
from .users import seed_users, undo_users
from .haveCards import seed_haveCards, undo_haveCards
from .wantCards import seed_wantCards, undo_wantCards
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_wantCards()
    seed_haveCards()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_haveCards()
    undo_wantCards()
    # Add other undo functions here
