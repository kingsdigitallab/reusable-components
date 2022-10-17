Hydra/JAMStack
==============

Modules
-------

Projects based on this architecture will have at most three main modules:

* cms (backend)
* etl (data processing module)
* frontend_

Set up as a monorepo_ using the `npm workspaces`_ setting in `package.json`:

.. code-block:: json

   "workspaces": [
     "cms",
     "etl",
     "frontend"
   ]

Directory structure
~~~~~~~~~~~~~~~~~~~

* **.envs/** environment files for each of the modules, `.example` files should be under 
  version control to help setting up new instances

  * .cms.example
  * .etl.example
  * .frontend.example

* **.github/workflows** CI/CD pipelines
* **cms/** the cms module
* **docker/** files for setting up Docker provisioning, as needed

  * **local/module_name/***
  * **production/module_name/***

* **etl/** the data processing module
* :ref:`frontend/ <frontend>` the frontend module
* :ref:`.eslintrc.json <eslintrc>` to specify the linting rules
* **.nvmrc** to specify the node version used to run the project
* **.prettierignore** to specify which files should not be automatically formatted
* CHANGELOG.md_ to record project changes
* **LICENSE**
* **README.md**
* **docker-compose.override.yaml.example** Docker compose file for local overrides_,
  should be copied and renamed without `.example`
* **docker-compose.yaml** Docker compose file
* **package.json**

.. note::

   Docker is only needed if using the cms, and potentially etl modules. If the project
   only has the frontend module Docker should not be needed.

The highlevel directory structure for each module/workspace, by default, follows the
*standard* for JavaScript packages:

* **public/**
* **src/**
* **tests/**
* **package.json**

.. note:: 

   This directory structure may not apply to all the workspaces, for example, if using
   Directus_ for the cms module the directory structure should follow the structure of
   the Directus project, which by default doesn't need a `src` directory.

Tooling
-------

These are used to guarantee consistency across projects and should be set up at the root
of the project:

.. _eslintrc:

* eslint_ to find issues in the code set up with the recommended settings and using
  prettier for formatting.

.. literalinclude:: ../../components/linters/.eslintrc.json
    :language: json

* `.nvmrc` to specify a node version

* prettier_ for code formatting

Dependencies
~~~~~~~~~~~~

.. code-block:: json

   "devDependencies": {
     "@babel/eslint-parser": "^7.18.2",
     "@babel/eslint-plugin": "^7.17.7",
     "eslint": "^8.17.0",
     "eslint-config-prettier": "^8.5.0",
     "prettier": "^2.6.2",
     "prettier-plugin-sort-imports": "^1.7.0",
     "simple-git-hooks": "^2.8.0",
     "vscode-langservers-extracted": "^4.2.1"
   }

Automation
~~~~~~~~~~

Both linting and formatting should be run as a pre-commit hook set up in `package.json`,
by using the simple-git-hooks_ package.

.. code-block:: json

   "simple-git-hooks": {
     "pre-commit": "npx lint-staged"
   },
   "lint-staged": {
     "*.{js}": "npm run format",
     "*.{md,yaml}": "npm run prettier:fix"
   }

Scripts
~~~~~~~

The top seven sample scripts are mostly useful for when one of the modules in the
project uses Docker, they provide a shortcut to interact with the containers.

.. code-block:: json

  "scripts": {
    "compose": "trap 'echo Stopped; exit 0' SIGINT; docker-compose",
    "up": "npm run compose up -- --build",
    "down": "npm run compose down",
    "exec": "npm run compose exec ${npm_config_service}",
    "pkg": "npm run exec npm",
    "cms:snapshot": "npm run pkg --service=cms run snapshot:create",
    "cms:snapshot:apply": "npm run pkg --service=cms run snapshot:apply ./snapshots/${npm_config_snapshot}.yaml",
    "lint": "eslint **/src **/tests",
    "lint:fix": "npm run lint -- --fix",
    "prettier": "prettier . --check",
    "prettier:fix": "npm run prettier -- --write",
    "format": "npm run prettier:fix && npm run lint:fix",
    "test": "npm run test --workspaces --if-present"
  }

.. _frontend:

Frontend module
---------------

By default the frontend module should be built using 11ty_.

Directory structure
~~~~~~~~~~~~~~~~~~~

* **../.github/workflows/frontend.yaml** GitHub pipeline file to build GitHub pages
* `.eleventy.js`_ 11ty configuration file
* *.env* environment file with settings to build the frontend
* *_site/* output directory for the built site (not under version control)
* *package.json*
* *public/* contains files that are not used by the build process
  
  * **assets/*** images, pdfs, etc.
  * **robots.txt**

* **src/** input/src directory for the build process

  * **_data/** global data/collections for the project

    * **eleventyComputed.js** computed fields available to every layout
    * **seo.json** settings for the seo_ plugin
  * **_includes/**  contains layouts, include files, extends files, partials, or macros

    * layouts_/ contains layout templages
    * **macros/** contains reusable chunks, similar to a function does in programming
      languages
    * **partials/** contains layouts partials/fragments

  * **assets/**

    * **stylesheets/** SCSS files that will be built by 11ty

Templates
~~~~~~~~~

Component-based development for template reuse, one possibility is to use Nunjucks_
macros:

* https://iainbean.com/posts/2020/flexible-components-in-eleventy-with-nunjucks-macros/
* https://www.trysmudford.com/blog/encapsulated-11ty-components/

.. warning::
   11ty supports multiple template languages, ~10! I have settled on Nunjucks because it
   seemed that was the language mostly used in 11ty projects. The other reason I have
   not used liquid is because the JavaScript implementation is different from the Ruby
   one used with Jekyll. One issue I have with it is that both the `empty string` and
   `0` are truthy in `liquid`.

Scripts
~~~~~~~

Execute them with `npm run`.

.. code-block:: json

  "scripts": {
    "build": "eleventy",
    "dev": "eleventy --serve",
    "debug": "DEBUG=Eleventy* npm run dev",
    "index": "npx pagefind --source _site"
  }

Plugins
~~~~~~~

The 11ty website has a list of both core and community plugins_.

Currently used
^^^^^^^^^^^^^^

* eleventy-navigation_ plugin for creating hierarchical navigation and breadcrumbs
* seo_ plugin to generate meta tags for improved SEO
* toc_ plugin to generate table of contents from page headers

Potentially useful
^^^^^^^^^^^^^^^^^^

* https://www.11ty.dev/docs/plugins/image/
* https://www.11ty.dev/docs/plugins/i18n/
* https://www.npmjs.com/package/eleventy-plugin-html-validate
* https://www.npmjs.com/package/@quasibit/eleventy-plugin-sitemap

Search
~~~~~~

Search can easily be added to an 11ty project by using the pagefind_ package.


.. _monorepo: https://en.wikipedia.org/wiki/Monorepo
.. _npm workspaces: https://docs.npmjs.com/cli/v8/using-npm/workspaces
.. _CHANGELOG.md: https://keepachangelog.com/en/1.0.0/
.. _overrides: https://docs.docker.com/compose/extends/#multiple-compose-files
.. _Directus: https://directus.io/
.. _eslint: https://eslint.org/
.. _prettier: https://prettier.io/
.. _simple-git-hooks: https://github.com/toplenboren/simple-git-hooks
.. _11ty: https://11ty.dev/ 
.. _.eleventy.js: https://www.11ty.dev/docs/config/
.. _layouts: https://www.11ty.dev/docs/layouts/
.. _seo: https://github.com/artstorm/eleventy-plugin-seo
.. _Nunjucks: https://mozilla.github.io/nunjucks/
.. _plugins: https://www.11ty.dev/docs/plugins/
.. _eleventy-navigation: https://www.11ty.dev/docs/plugins/navigation/
.. _toc: https://github.com/jdsteinbach/eleventy-plugin-toc
.. _pagefind: https://pagefind.app/
