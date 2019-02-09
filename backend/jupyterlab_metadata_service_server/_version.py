import os
import json

with open(os.path.join(os.path.dirname(__file__), 'package.json')) as fp:
    __version__ = json.load(fp)['version']
