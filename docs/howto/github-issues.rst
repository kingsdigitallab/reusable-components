Github Issues guidelines
========================

This document is a work in progress.

https://docs.github.com/en/issues/tracking-your-work-with-issues/quickstart

1. Scope
--------

Tickets created in Github should be for mostly minor, low-level implementation-specific of pre-agreed components of the research software. 
Anything higher-level, more major or about other components should instead be raised and discussed via the normal route with an Analyst.

Let us know if you are unsure whether an issue falls within the current agreed scope.

2. Prioritisation
-----------------

We use the MOSCOW system. 
https://www.agilebusiness.org/dsdm-project-framework/moscow-prioririsation.html

Priorities are negotiated based on how research needs and technical feasibility / cost. KDL project analyst is ultimately responsible for them.

We generally work first on higher priorities ticket but the order may also depend on functional grouping or other technical factors. 
As a rule of thumb there should be a very limited number of MUST tickets (e.g. around three) at any time in order to keep the work focused and agile. 
It is best to conservative with the priorities and number of open tickets. 

3. New ticket
-------------

A KDL member or a member of the research team can open a new ticket. Please provide at a minimum:

* a short but clear title
* a specific description which is precise enough, the more details the better (e.g. screenshots, links, inputs, outputs, ...)
* description should indicate the screen/url of the user interface and name the interface elements it refers to  
* for bugs, please provide step by step description of the actions to systematically reproduce the error. Preferably using bullet points
* apply a label saying whether this is a bug or an enhancement
* assign to agreed default person person at KDL (analyst or developer)

It is best to break things into a small unit of work. So each ticket correspond to a single bug or a single atomic feature request. 
https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects#break-down-large-issues-into-smaller-issues

Larger features should be discussed with analyst directly via other channels than github.

4. Volume
---------

Although we encourage you to always report bugs, please be mindful of number of open tickets in system. 
It is best to keep the number of open feature requests (i.e. enhancement) limited at any time to keep our focus, avoid unmanageable backlog or feature-creep.

The worflow is iterative and only a few tickets can be done in one development iteration /increment. More features can be added in the next cycle.

5. Rest of the workflow
-----------------------

The comment area on the tickets is very useful to keep all questions and communication on topic, responsive and descriptive.

To draw the attention of someone (e.g. asking them a direct question), prefix their username with @ in the comment. Github will notify them.
https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues#efficient-communication

When a ticket has been implemented (e.g. fixed and issue or added a new feature), KDL will close the ticket and leave a short message with an explanation of what has been done.

Research team can then review the work and re-open the ticket if it isn't satisfied with the resolution.
