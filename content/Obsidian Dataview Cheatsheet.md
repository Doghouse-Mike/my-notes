---
{"publish":true,"title":"Obsidian Dataview Cheatsheet","created":"2024-10-03 22:26:28","modified":"2025-07-17 12:41:12","cssclasses":""}
---


# Obsidian Dataview Cheatsheet

Shamelessly stolen from [here](https://github.com/seburbandev/obsidian-dataview-cheatsheet)

# Table of Contents

- [[Obsidian Dataview Cheatsheet#list\|LIST]]
  - [[Obsidian Dataview Cheatsheet#simple-list\|Simple List]]
  - [[Obsidian Dataview Cheatsheet#table\|Table]]
- [[Obsidian Dataview Cheatsheet#data-commands\|Data Commands]]
  - [[Obsidian Dataview Cheatsheet#from\|FROM]]
    - [[Obsidian Dataview Cheatsheet#tags\|Tags]]
    - [[Obsidian Dataview Cheatsheet#excluding-notes-with-a-specific-tag\|Excluding notes with a specific tag]]
    - [[Obsidian Dataview Cheatsheet#excluding-notes-from-a-specific-folder\|Excluding notes from a specific folder]]
    - [[Obsidian Dataview Cheatsheet#folders\|Folders]]
    - [[Obsidian Dataview Cheatsheet#single-files\|Single Files]]
  - [[Obsidian Dataview Cheatsheet#where\|WHERE]]
    - [[Obsidian Dataview Cheatsheet#where-property-is-not-empty\|WHERE property is NOT empty]]
    - [[Obsidian Dataview Cheatsheet#where-property-is-equal-to-something\|WHERE property is equal to something]]
  - [[Obsidian Dataview Cheatsheet#group-by\|GROUP BY]]
    - [[Obsidian Dataview Cheatsheet#group-by-category\|GROUP BY category]]
  - [[Obsidian Dataview Cheatsheet#flatten\|FLATTEN]]
    - [[Obsidian Dataview Cheatsheet#multiple-properties-displayed-in-its-own-row\|Multiple properties displayed in its own row]]
  - [[Obsidian Dataview Cheatsheet#bool-property-to-custom-display-value\|Bool property to custom display value]]
    - [[Obsidian Dataview Cheatsheet#display-yesno-instead-of-truefalse-on-bool-properties\|Display Yes/No instead of True/False on bool properties]]
  - [[Obsidian Dataview Cheatsheet#limit-results-in-query\|Limit results in query]]
- [[Obsidian Dataview Cheatsheet#meta-data-examples\|Meta Data Examples]]
  - [[Obsidian Dataview Cheatsheet#json\|JSON]]
  - [[Obsidian Dataview Cheatsheet#yaml\|YAML]]

# Query Cheatsheet

# LIST

## Simple List

```js
LIST FROM <tag-name>
```

Example

```js
LIST
FROM
#games
```

## Table

```js
TABLE
  Title
FROM
  #tagName
```

# Data Commands

- FROM
- WHERE
- SORT (to do)
- GROUP BY (to do)
- FLATTEN
- LIMIT

## FROM

Selecting from different sources such as;

## Tags

`FROM #tag`

Example

```js
TABLE
  file.cday as "Created Date"
FROM
  #my-tag
```

## Excluding Notes with a Specific Tag

`!#tag-name`

Example

```js
TABLE
  Title,
  Rating,
  Seen,
  SeenDate as "Seen on"
FROM
  #movie AND !#template
```

The above example will return all notes with a tag `#movie` but exclude notes with a tag `#template`. This is handy if you have a note with pre-populated tags but it's only used as a template so you don't want to see it in your table view.

## Excluding Notes from a Specific Folder

`FROM #tag AND !"FolderName"`

Example

```js
TABLE
  Title,
  Rating,
  Seen,
  SeenDate as "Seen on"
FROM
  #movie AND !"TemplatesFolder"
```

By including `!"FolderName"` we specify that we do not want to return any matches if the are located in the specified folder.

## Folders

`FROM "folder-name"`

Example

```js
TABLE
  file.cday as "Created Date"
FROM
  "my-folder-name"
```

## Single Files

`FROM "path/to/file-name"`

Example

```js
TABLE
  file.cday as "Created Date"
FROM
  "TopFolder/SubFolder/my-file-name"
```

## GROUP BY

### GROUP BY Category

```js
GROUP BY <property-name>
```

Examples

```sql
TABLE 
rows.file.name as "File"
WHERE category
GROUP BY  category
```

```sql
LIST
rows.file.name
WHERE
category = "first-category"
GROUP BY category
```

NOTE: When using group by, the structure of the results changes. Instead of directly accessing `file.name`, you must use the `rows` property to access the file properties within each group. This is because results are now grouped into rows based on the group by field.

## WHERE

Examples of queries containing WHERE clause.

### WHERE Property is NOT Empty

```js
WHERE <property-name>
```

Example

```sql
TABLE
  file.cday as "Created",
  Category
FROM
  #books
SORT
  file.cday
WHERE
  Category
```

The above example ensures to show only results where the meta-data 'Category' is not empty.

### WHERE Property is Equal to Something

```js
WHERE <string-property-name> = "my-value"
```

```js
WHERE <digit-property-name> = 123
```

Examples

```sql
LIST
WHERE
Category = "my-value"
```

```sql
LIST
WHERE
DigitProperty = 123
```

# FLATTEN

## Multiple Properties Displayed in Its Own Row

```js
FLATTEN <property-name>
```

Code example:

```js
TABLE
  Title,
  Action
FLATTEN Action
```

Result example:

| File Name | Created | Action        |
| --------- | ------- | ------------- |
| Note 1    | July    | Action name 1 |
| Note 1    | July    | Action name 2 |
| Note 2    | August  | My Action 123 |
| Note 2    | August  | Hello World   |

# Bool Property to Custom Display Value

## Display Yes/No instead of True/False on Bool Properties

Snippet

```js
CHOICE(<bool-property>, "Yes", "No") as "custom-name"
```

Example

```sql
TABLE
  Author as "Author",
  choice(read, "Yes", "No") as "Read",
FROM
  "Books"
```

# Limit Results in Query

```js
LIMIT 10
```

Example:

```js
TABLE
  Title,
  Rating
WHERE
  Rating > 3
LIMIT 10
```

# Meta Data Examples

Obsidian allows YAML and JSON for metadata.

## JSON

JSON

```
{
  "Author": "Author Name",
  "Genre": "Fiction",
  "DateRead": "2022-06-01",
  "Read": false,
  "Tags": [
    "Mind-blowing",
    "Interesting",
    "Science"
  ]
}
```

## YAML

YAML

```
Author: Author Name
Genre: Fiction
DateRead: '2022-06-01'
Read: false
Tags:
- Mind-blowing
- Interesting
- Science
```
