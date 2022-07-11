Web analytics
=============

We are currently trialing `GoAccess <https://goaccess.io/>`_ as a prelacement for Google Analytics.

GoAccess works entirely locally. Currently used by Radical Translation (and soon Alice Thornton).

Installation instructions
-------------------------

Instructions tested on Ubuntu 20.04 with our default nginx setup

1. Download & install latest stable version using the Official Ubuntu Repository (because default distribution package is too old)

   1. elevate to root using ksu
   2. run each provided line one by one (remove 'sudo' keyword before running them)
   3. before running apt-get update, do chmod ugo+r /usr/share/keyrings/goaccess.gpg

2. Check goaccess is install by running goaccess --version (should be 1.6+)
3. vi /etc/goaccess/goaccess.conf

   1. uncomment line 13: time-format %H:%M:%S
   2. uncomment line 36: date-format %d/%b/%Y
   3. Under 'Log Format Options' section, add: log-format  %h %^[%d:%t %^] "%m %U" %s %b "%R" "%u"
   4. http-protocol yes -> http-protocol false
   5. #browser-file -> browsers-file /etc/goaccess/browsers.list
   6. ignore-crawlers false -> ignore-crawlers true
   7. AFTER ignore-status 502, ADD ignore-status 301 AND ignore-status 302
   
4. mkdir /project/webroot/liv/logs/trafficserver/goaccess
5. goaccess /project/webroot/liv/logs/trafficserver/access.log -a --persist --restore --db-path=/project/webroot/liv/logs/trafficserver/goaccess -o /dev/null
6. create cron job to persist web logs to the goaccess db

   1. crontab -e
   2. ADD: 0 * * * * goaccess /project/webroot/liv/logs/trafficserver/access.log -a --persist --restore --db-path=/project/webroot/liv/logs/trafficserver/goaccess -o /project/webroot/stg/github/frontend/_site/webstats.html && chmod ugo+rw /project/webroot/stg/github/frontend/_site/webstats.html

View web stats
--------------

From command line:

1. ssh into the server
2. elevate to root with ksu
3. goaccess --restore --db-path=/project/webroot/liv/logs/trafficserver/goaccess

Alternatively From the staging site: go to /webstats.html

TODO:

* Analysis: how can we do time slice, look at bounce rates, entry/exit points, navifation flow?
* Make sure size of GoAccess DB remains small enough over longer period of time
