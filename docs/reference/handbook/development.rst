Development
===========

Code quality
------------

- `Conventional commits`_: provide a standardised format to writting commit messages
  that follow a specific format. It helps to improve readability and consistency of
  commit messages/history. This enhances collaboration and facilitates automated
  processes such as generating release logs, leading to better project management
  overall. commitizen_ is a command-line tool that implements conventional commits and 
  can help with adhering to the conventional commits standard.
- Pre-commit hooks: enable automated checks that run before committing code, helping
  ensure code quality and consistency. They can perform tasks such as running tests,
  linting code, and enforcing coding standards. For Python projects consider using
  pre-commit_; for JavaScript/Node projects consider using simple-git-hooks_.

Formatters / linters
~~~~~~~~~~~~~~~~~~~~

Formatters and linters are tools used in software development to improve code quality
and maintain consistent coding standards. **Formatters** automatically modify code to adhere
to a specific style guide, ensuring uniformity in formatting, such as indentation, line
spacing, and code layout. **Linters** analyze code for potential errors, bugs, or deviations
from best practices. They provide warnings or errors to help identify and correct issues
related to code quality, style, or potential vulnerabilities.

- For Python projects use at least:

  - black_
  - isort_

- For JavaScript projects use at least:

  - ESLint_
  - Prettier_

Release management
------------------

Release management using `semantic versioning`_ is a standardised approach to version
numbering in software development. It involves assigning version numbers with specific
meanings to indicate the nature of changes made in a release.

Semantic versioning consists of three parts: major version, minor version, and patch
version. Incrementing the major version signifies backward-incompatible changes, the
minor version indicates the addition of new features while maintaining backward
compatibility, and the patch version represents backward-compatible bug fixes and small
updates.

Besides commitizen_, for JavaScript projects, release-it_ is also available to help with
release management.

Keeping a changelog_ is an essential aspect of release management using semantic
versioning. It involves documenting the changes, enhancements, and bug fixes made in
each release, providing a comprehensive record of the project's evolution over time. A
well-maintained changelog aids in transparent communication, facilitates collaboration,
and helps users understand the modifications introduced in different versions of a
project.

Both commitizen_ and release-it_ have options to automatically generate a changelog
when using conventional commits.

.. _Conventional commits: https://www.conventionalcommits.org/
.. _commitizen: https://commitizen-tools.github.io/commitizen/
.. _pre-commit: https://www.conventionalcommits.org/
.. _simple-git-hooks: https://github.com/toplenboren/simple-git-hooks
.. _black: https://github.com/psf/black
.. _isort: https://pycqa.github.io/isort/
.. _ESLint: https://eslint.org/
.. _Prettier: https://prettier.io/
.. _semantic versioning: https://semver.org/
.. _release-it: https://github.com/release-it/release-it
.. _changelog: https://keepachangelog.com/