# _JupyterLab Metadata Service - Server_

## Setting Up a Development Environment

### Creating the environment using conda

Building _JupyterLab Metadata Service - Server_ from its GitHub source code requires python and Node.js.

```bash
# If you already have an environment with this name:
# conda remove --name jupyterlab-metadata-service --all
conda env update
source activate jupyterlab-metadata-service
```

## Build and install for development

Run the following commands to install the initial project dependencies and install it in your environment.

```bash
jlpm
```

Run your server using:

```bash
jlpm start
```

### Build and Run the Tests

To build _JupyterLab Metadata Service - Server_, run:

```bash
yarn build
```

At this moment, tests are not available.


#### Packaging

The distributed python `serverextension` package includes a WebPack build of the metadata server and all required dependencies, so only `nodejs>4` is required for the end user. To build the server:

```bash
cd backend/jupyterlab_metadata_service_server
jlpm build
cd ../..
python setup.py sdist bdist_wheel
# source distributions and wheels will appear in dist/
```
