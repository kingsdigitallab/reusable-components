.. _howto-cookies:

Cookies disclaimer
==================

This document describes how to add a `Cookies disclaimer` box to a project. The source
code for this how-to is available in `GitHub`_.

1. Add the `HTML` snippet to every page on the project.

.. literalinclude:: ../../components/cookies/index.html
    :language: html

2. Add the `JavaScript` function to the project.

 .. literalinclude:: ../../components/cookies/main.js
    :language: javascript

3. Call the ``cookies()`` function from the main project script.
4. Add a `Privacy and Cookie Policy`_ to the project.

.. _GitHub: https://github.com/kingsdigitallab/vault-101/tree/main/components/cookies
.. _Privacy and Cookie Policy: https://kdl.kcl.ac.uk/privacy-policy/
