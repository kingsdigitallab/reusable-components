Web analytics
=============

We are currently trialing `GoAccess <https://goaccess.io/>`_ as a prelacement for Google Analytics.

GoAccess works entirely locally. Currently used by Radical Translation (and soon Alice Thornton).

Installation instructions
-------------------------

Instructions tested on Ubuntu 20.04 with our default nginx setup

1. Download & install latest stable version using the Official Ubuntu Repository (because default distribution package is too old)

   1.1 elevate to root using ksu
   1.2 run each provided line one by one (remove 'sudo' keyword before running them)
   1.3 before running apt-get update, do chmod ugo+r /usr/share/keyrings/goaccess.gpg

2. Check goaccess is install by running goaccess --version (should be 1.6+)
3. vi /etc/goaccess/goaccess.conf

   3.1 uncomment line 13: time-format %H:%M:%S
   3.2 uncomment line 36: date-format %d/%b/%Y
   3.3 Under 'Log Format Options' section, add: log-format  %h %^[%d:%t %^] "%m %U" %s %b "%R" "%u"
   3.4 http-protocol yes -> http-protocol false
   3.5 #browser-file -> browsers-file /etc/goaccess/browsers.list
   3.6 ignore-crawlers false -> ignore-crawlers true
   3.7 AFTER ingore-status 502, ADD ignore-status 301 AND ignore-status 302
   3.8 
  
