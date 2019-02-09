# Contributing to JupyterLab

If you're reading this section, you're probably interested in contributing to
JupyterLab Metadata Service Extension. Welcome and thanks for your interest in contributing!

Please take a look at the Contributor documentation, familiarize yourself with
using JupyterLab Metadata Service Extension, and introduce yourself on the mailing list and share
what area of the project you are interested in working on. Please see also the
Jupyter [Community Guides](https://jupyter.readthedocs.io/en/latest/community/content-community.html).

We have labeled some issues as [good first issue](https://github.com/jupyterlab/jupyterlab-metadata-service/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) or [help wanted](https://github.com/jupyterlab/jupyterlab-metadata-service/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
that we believe are good examples of small, self-contained changes.
We encourage those that are new to the code base to implement and/or ask
questions about these issues.

## General Guidelines

For general documentation about contributing to Jupyter projects, see the
[Project Jupyter Contributor Documentation](https://jupyter.readthedocs.io/en/latest/contributor/content-contributor.html) and [Code of Conduct](https://github.com/jupyter/governance/blob/master/conduct/code_of_conduct.md).

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

You may also use the prettier npm script (e.g. `npm run prettier` or `yarn prettier` or `jlpm prettier`) to format the entire code base. We recommend
installing a prettier
extension for your code editor and configuring it to format your code with
a keyboard shortcut or automatically on save.

## Setting Up a Development Environment

#### Create a fresh Conda environment

```bash
# If you already have an environment with this name:
# conda remove --name jupyterlab-metadata-service --all
conda env update --file environment-dev.yml
source activate jupyterlab-metadata-service
```

## Build and install the extension for development

Run the following commands to install the initial project dependencies and install it in the JupyterLab environment.

```bash

jlpm install
jupyter labextension install . --no-build
jlpm watch

```

After the install completes, open a second terminal. Run these commands to activate the `jupyterlab-metadata-service`
environment and to start a JupyterLab instance in watch mode so that it will keep up with our changes as we make them.

```bash

conda activate jupyterlab-metadata-service
jupyter lab --watch

```

### Build and Run the Tests

To build this extesion run:

```bash
yarn run prepare
```

At this momemnt, tests is not available.

## [Writing Documentation](#writing-documenation)

Documentation is written in Markdown and reStructuredText. In particular, the documentation on our Read the Docs page is written in reStructuredText. To ensure that the Read the Docs page builds, you'll need to install the documentation dependencies with `conda`. These dependencies are located in `docs/environment.yml`. You can install the dependencies for building the documentation by creating a new conda environment:

```bash
conda env update -f docs/environment.yml
conda activate jlab-metadata-service-docs
```

Alternatively, you can install the documentation dependencies in an existing environment using the following command:

```bash
conda env update -n <ENVIRONMENT> -f docs/environment.yml
```

The Developer Documentation includes a [guide](http://jupyterlab.readthedocs.io/en/latest/developer/documentation.html) to writing documentation including writing style, naming conventions, keyboard shortcuts, and screenshots.

To test the docs run (inside `docs` folder):

```
py.test --check-links -k .md . || py.test --check-links -k .md --lf .
```

The Read the Docs pages can be built using `make` (inside `docs` folder):

```bash
make html
```
