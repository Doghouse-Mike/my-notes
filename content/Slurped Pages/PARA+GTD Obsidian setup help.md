---
date: 2022-12-21T18:27
byline: TylerC
date created: Sunday, June 23rd 2024, 8:49:55 pm
date modified: Sunday, March 9th 2025, 2:10:38 pm
excerpt: Hi y’all! 🙂  I’ve attempted to recreate a PARA + GTD setup as found in
link: https://forum.obsidian.md/t/para-gtd-obsidian-setup-help/50249
site: Obsidian Forum
slurped: 2024-06-23T20:49
title: PARA+GTD Obsidian Setup Help
---

# PARA+GTD Obsidian Setup Help

Hi y’all! ![:slight_smile:](https://forum.obsidian.md/images/emoji/apple/slight_smile.png?v=12 ":slight_smile:")

I’ve attempted to recreate a PARA + GTD setup as found in [this medium article](https://medium.com/@guywiener/para-gtd-obsidian-setup-d7f30b1dbb0c). Unfortunately, the queries he provides do not seem to work for me.

## [](https://forum.obsidian.md/t/para-gtd-obsidian-setup-help/50249#things-i-have-tried-1)Things I Have Tried

I have the Tasks and the Dataview plugins. In addition, I’ve setup Tasks plugin and also made sure I have the Tags plugin enabled.

The only difference between my setup and his is the names of my PARA folders. I’m considering each part of PARA as a map of content and therefore append “MOC” to the end of it. In addition, I’m prefixing the folders with a number as makes sense for PARA.

This makes my final notes:

1 Projects MOC  
2 Areas MOC  
3 Resources MOC  
4 Archives MOC

All of this being said, I think I have updated the query he has provided correctly. I believe that the only thing I need to do is update the outgoing file from “Projects” to “1 Projects MOC”. This is what I’ve come up with:

```
let projects = dv.pages('outgoing([[1 Projects MOC]])')  
let rows = projects.flatMap(  
page => page.file.tasks  
.filter(t => !t.completed && t.text.includes('#next'))  
.map(task => [page.file.link, task.text.replace('#next', '')]  
)  
)  
dv.table(['Project', 'Next'], rows)
```

After attempting to run this (ctrl+e), I get the following error:

```
Dataview: Error: 
-- PARSING FAILED --------------------------------------------------

> 1 | let projects = dv.pages('outgoing([[1 Projects MOC]])')  
    | ^
  2 | let rows = projects.flatMap(  
  3 | page => page.file.tasks  

Expected:

TABLE or LIST or TASK or CALENDAR
```

So I am thinking I should put “TABLE” at the beginning of the query. However, if I do that, I get the following error:

```
Dataview: Error: 
-- PARSING FAILED --------------------------------------------------

  1 | TABLE
> 2 | let projects = dv.pages('outgoing([[1 Projects MOC]])')  
    |     ^
  3 | let rows = projects.flatMap(  
  4 | page => page.file.tasks  

Expected one of the following: 

'*' or '/' or '%', '+' or '-', ',', '>=' or '<=' or '!=' or '=' or '>' or '<', 'and' or 'or', /AS/i, /FROM/i, EOF, FLATTEN <value> [AS <name>], GROUP BY <value> [AS <name>], LIMIT <value>, SORT field [ASC/DESC], WHERE <expression>
```

Not sure where to go from here. I hope I’m being clear. Please help

## [](https://forum.obsidian.md/t/para-gtd-obsidian-setup-help/50249#what-im-trying-to-do-2)What I’m Trying to Do

I’d like to have all 4 queries he has but can’t even get past the first one. I’d like some help troubleshooting the aforementioned errors.
