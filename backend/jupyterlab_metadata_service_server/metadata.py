"""JupyterLab Metadata Service Server"""
import os

from ._version import __version__

dist = os.path.join(os.path.dirname(__file__), 'dist',
                    'jupyterlab-metadata-service-server-{}.js'.format(__version__))


def start():
    """Start JupyterLab Metadata Service Server Start

    Returns:
        dict -- A dictionary with the node command that will start the
                Metadata Service Server

    """
    return {
        'command': ['node', dist, '{port}'],
        'timeout': 60,
        'port': 40000
    }
