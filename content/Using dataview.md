---
{"publish":true,"aliases":"","title":"Using Dataview","created":"2025-03-24 12:57:20","cssclasses":""}
---


# Using Dataview

Metadata in notes

Frontmatter in YAML, as above 

Not sure that's working. Needs 3 "-" above/below, but I seem to get — when I get to two. Spaces and then deleting them seems to work. Probably a setting somewhere to not put the big bois in. 

Offers list, table, and task view

Task view would be the one.

## Lists

Example:

> ***dataview
> LIST
> FROM "Name of folder"
> SORT file.size DESC
> LIMIT 10

## Tables

> ***dataview
> TABLE author, date, rating
> FROM #books
> SORT date DESC

## Tasks!

> ***dataview
> TASK from #projects/doing
> 
> ***

*** dataview
TASK from #todo

***

Think I've donked that up somewhere along the way. Vid sped over it pretty quick, but I got some articles to read too. More research required, standard. 
