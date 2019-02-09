from os.path import join, dirname
import json
import setuptools


name = 'jupyterlab_metadata_service_server'

path = join(dirname(__file__), name)

with open(join(path, 'package.json')) as fp:
    package = json.load(fp)


setuptools.setup(
    name=package['name'],
    version=package['version'],
    license=package['license'],
    author=package['author'],
    author_email='jupyterlab@localhost',
    url='https://github.com/jupyterlab/jupyterlab-metadata-service',
    packages=setuptools.find_packages(),
    entry_points={
        'jupyter_serverproxy_servers': [
            'metadata = {}.metadata:start'.format(name),
        ]
    },
    install_requires=['jupyter-server-proxy', 'notebook'],
    include_package_data=True,
    zip_safe=False
)
