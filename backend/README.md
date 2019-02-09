# _JupyterLab Metadata Service - Server_

All source code is written in
[TypeScript](http://www.typescriptlang.org/Handbook). See the [Style
Guide](https://github.com/jupyterlab/jupyterlab/wiki/TypeScript-Style-Guide).

All source code is formatted using [prettier](https://prettier.io).
When code is modified and committed, all staged files will be automatically
formatted using pre-commit git hooks (with help from the
[lint-staged](https://github.com/okonet/lint-staged) and
[husky](https://github.com/typicode/husky) libraries). The benefit of using a
code formatter like prettier is that it removes the topic of code style from the conversation
when reviewing pull requests, thereby speeding up the review process.

You may also use the prettier npm script (e.g. `npm run prettier`) to format the entire code base. We recommend
installing a prettier
extension for your code editor and configuring it to format your code with
a keyboard shortcut or automatically on save.

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
