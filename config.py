
ARCHS = ['i386', 'amd64']

SECTIONS = ('main', 'contrib', 'non-free')

DISTS = [
    'hamm', 'slink', 'potato', 'woody', 'sarge', 'etch',
    'lenny', 'squeeze', 'wheezy', 'jessie', 'stretch', 'sid'
]

REPOS = {
    'hamm': 'old',
    'slink': 'old',
    'potato': 'old',
    'woody': 'old',
    'sarge': 'old',
    'etch': 'old',
    'lenny': 'old',
    'squeeze': 'old',
    'jessie': 'current',
    'wheezy': 'current',
    'stretch': 'current',
    'sid': 'current',
}

BASE_URLS = {
    'current': 'http://ftp.us.debian.org/debian',
    'old': 'http://archive.debian.org/debian'
}

