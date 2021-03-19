.. _howto-wait-for-elasticsearch-docker:

Wait for Elasticsearch to be ready in Docker/Compose
=====================================================

The Django_ service dependencies set with depends_on_ in Docker compose do not wait
for the elasticsearch_ service to be *ready*, they only wait until the service is
started.

To guarantee that `elasticsearch` is ready add the following snippet to the `Django`
``entrypoint`` script:

.. code-block:: bash

    if [ -z "${ELASTICSEARCH_HOST:-}" ]; then
        export ELASTICSEARCH_HOST="elasticsearch:9200"
    fi

    elasticsearch_ready() {
    python << END
    import sys

    from elasticsearch_dsl import connections
    from elasticsearch.exceptions import ConnectionError

    try:
        c = connections.create_connection(hosts=["${ELASTICSEARCH_HOST}"], timeout=10)
        c.info()
    except (ConnectionError, ConnectionRefusedError) as e:
        sys.exit(-1)

    sys.exit(0)
    END
    }
    until elasticsearch_ready; do
      >&2 echo 'Waiting for Elasticsearch to become available...'
      sleep 1
    done
    >&2 echo 'Elasticsearch is available'

.. _Django: https://www.djangoproject.com/ 
.. _depends_on: https://docs.docker.com/compose/compose-file/compose-file-v3/#depends_on
.. _elasticsearch: https://www.elastic.co/elasticsearch/

