`XML Schema languages <https://en.wikipedia.org/wiki/XML_schema>`_

- ODD (TEI, ): "One Document Does it all", is a special TEI document from which documentation and a schema can be derived. ODD can be created with `ROMA <https://romabeta.tei-c.org/>`_
- Schematron (2006, ISO/IEC): rule based validation.
- `RELAX NG <http://relaxng.org/>`_ (2001, ISO): more accessible than XSD. Mostly about validation. Note that a RNG schema can contain schematron rules.
- XSD (2001, W3C): XML schema, most widely adopted generally. Also more than just validation.
- DTD (1986, SGML): Document Type Definition, now superseded by the above languages.

IDE validation

- VSCode with Scholarly XML extension will highlight invalid constructs based on RNG. It uses `Salve <https://github.com/mangalam-research/salve>`_ JS validator.

Command line validation

- Relax NG: Jing (Java), xmllint (not sure if reliable)

.. code-block::
    $ wget wget http://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_all.rng
    $ xmllint --relaxng tei_all.rng --noout book_one.xml
    book_one.xml:229: element ab: Relax-NG validity error : Did not expect element ab there
    book_one.xml fails to validate

