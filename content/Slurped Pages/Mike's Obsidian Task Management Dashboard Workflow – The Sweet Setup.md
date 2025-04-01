---
date: 2024-06-06T15:00
byline: Mike Schmitz
date created: Sunday, June 23rd 2024, 8:33:43 pm
date modified: Sunday, March 9th 2025, 2:10:38 pm
excerpt: I've been obsessed with crafting my own task management workflows in
link: https://thesweetsetup.com/mikes-obsidian-task-management-dashboard-workflow/
site: The Sweet Setup
slurped: 2024-06-23T20:33
title: "Mike's Obsidian Task Management Dashboard Workflow – The Sweet Setup"
---

# Mike's Obsidian Task Management Dashboard Workflow – The Sweet Setup

![](https://thesweetsetup.com/wp-content/uploads/2024/06/obsidiantaskshero.jpeg)

I’ve written previously about [Obsidian task management basics](https://thesweetsetup.com/obsidian-task-management-basics/) and [creating task management queries](https://thesweetsetup.com/obsidian-task-management-queries/), but lately I’ve been obsessed with crafting my own task management workflows in Obsidian. I decided several months ago I was going to go all in with managing tasks and projects in Obsidian, and in this post I’m going to show you how I set it all up using the [Tasks plugin](https://github.com/obsidian-tasks-group/obsidian-tasks).

## The Pros & Cons of Plain Text Task Management in Obsidian

I actually don’t generally recommend plain text task management in Obsidian. There’s just too many compromises for most people.

For example, if you rely on notifications to get things done, then this likely won’t work for you. While it is possible to [add system-level notification on the desktop](https://thesweetsetup.com/obsidian-task-management-notifications/) , it’s pretty much impossible to get these notifications on mobile. If you need notifications for your task management workflow, you want a dedicated task manager (though it is possible to get the best of both worlds if you [use Todoist and sync your tasks to Obsidian](https://thesweetsetup.com/syncing-embedding-tasks-from-todoist-in-obsidian/)).

You also lose the ability to attach notes to your tasks. This sounds a little ridiculous seeing as how Obsidian is essentially a notes app, but the way tasks work in Obsidian requires you to put the entire task on a single line of text. That means that the task must include the name, due date, and any metadata on a single line. So if you often create todos and then type a bunch of notes for context, that won’t work in Obsidian.

You also can’t have subtasks in Obsidian. Because each line is independent, you can’t nest subtasks underneath a parent task like you can in a dedicated task manager. The way I get around this is by using checklists (which I’ll walk through later), but if you rely on subtasks for your task management workflow, then Obsidian task management is not for you.

But if you’re reading this, you’re probably a nerd like me. A nerd who is willing to figure out a way to overcome problems if it helps you be more productive and creative on your Apple devices.

So for nerds like us, there are a few key benefits.

*The big one is that you can link your tasks and your notes together easily.* This is great if you do a lot of creative work like I do and all of your writing is in Obsidian already. Yes, you can link things together using URL schemes, but nothing beats having things in the same app.

*The other big benefit is that you have complete control to craft your own system.* All the building blocks are there for you as long as you are willing to learn how to craft your own queries. It’s a lot like the custom perspectives in OmniFocus, only even more customizable. There really is nothing quite as flexible if you want to craft your own workflow.

### An Important Note About Task Locations

If you decide to give task management in Obsidian a shot, there’s a mindset shift you have to embrace before it will click:

*Location doesn’t matter.*

Most task managers have an inbox where things are collected and then you can move tasks to a specific project, much like a folder in the Finder. But that’s not how tasks in Obsidian work.

Task management in Obsidian depends on queries, which search the contents of your entire vault and return a list of things that match certain criteria. And while you can use folder location as a filter, moving tasks in Obsidian from one note to another requires manual copying and pasting. Don’t do it.

*The better way to handle tasks in Obsidian is to completely disconnect from the idea of task location and just keep everything in one big list.* That way, you can capture tasks from anywhere in your vault and have them be appended to the top of the list (I’ll show you how to do this later). This eliminates the friction of deciding where something should go and makes it easier to capture things when you need to.

## Using the Tasks Plugin

Like any other task manager, the [Tasks plugin](https://github.com/obsidian-tasks-group/obsidian-tasks) gives you a bunch of metadata options for filtering your tasks. Here are the different types of dates you can use and what they do:

- *Due dates* – the date the task must be done by
- *Scheduled dates* – the date when the task is scheduled for
- *Start dates* – the date a task is available to be worked on
- *Completed dates* – the date a task is completed
- *Cancelled dates* – the date a task is cancelled

Many of these dates can be added via the Tasks modal window:

![](https://thesweetsetup.com/wp-content/uploads/2024/06/obsidiantasksmodal.jpg)

You can add dates here using natural language, and can even set repeating tasks by choosing an interval (i.e. every 2 weeks on Friday).

You can also add tags to a task by including a hashtag (#) followed by the word you for the tag you want to use. By using tags, you can add a lot of options to how you filter tasks when you set up your task queries.

We’ll get into some of the queries I use in a little bit. But before we do, let’s make sure the Tasks plugin settings are configured correctly.

## Obsidian Tasks Settings

The [Obsidian Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) plugin has a ton of settings, making it a great foundation for your task management system. Here is a brief walkthrough of the settings and how I have each configured.

- **Task Format** — There are two types of formatting you can use for tasks in Obsidian: 1) *Dataview* (which you should use if you want to combine Tasks and Dataview queries) and 2) *Emoji*. I prefer the emoji formatting (I think it looks better) and I use Short Mode (which hides the metadata behind emoji icons in task names) in my queries a lot, so I have this set to *Tasks Emoji Format*.
- **Global Task Filter** — In order to differentiate between tasks that should show up in queries and other checklist items in your Obsidian vault, the Tasks plugin lets you denote a tag that tells the plugin which lines should be considered tasks. I have mine set to `#todo`, so that only lines with the *todo* tag show up in my task queries.
- **Remove Global Filter from Description** — While I use the *todo* tag to denote which tasks should show up in my queries, I don’t need to see that tag when listing my tasks. I toggle this option on, which removes the `#todo` tag when showing my tasks in a query.
- **Global Query** — In addition to a global task filter, you can also create a global query that gets added to all queries you create in your Obsidian vault. If you end up using the same thing in every query (i.e. `not done`) you may want to use this, but I leave it blank.
- **Core & Custom Task Statuses** — This is where you can get really nerdy and create your own task management workflows inside of Obsidian by indicating a state when a task goes from one state to another. For example, the Core Status *Todo* is when the task is incomplete (`- [ ]`), and the next step in the workflow is to mark it as *Done* (`- [ ]`). But you can create some pretty crazy workflows by adding additional Custom Statuses. Personally, I don’t use these and just use the built-in statuses.
- **Set Created Date on Every Added Task** — This adds the creation date to every task you add. I don’t really care when a task was created, so I leave this toggled off.
- **Set Done Date on Every Completed Task** — This adds the date that the task was completed when you check it off, which can be useful if you want to create a query that shows you everything you completed in a set time period. I have this toggled on.
- **Set Cancelled Date on Every Cancelled Task** — This adds the date the task was cancelled when you cancel it from the dialog box. I usually just delete my tasks instead, so I have this toggled off.
- **Use Filename as Scheduled Date for Undated Tasks** — Since dates are generally important to task management, this option allows the plugin to add a Scheduled date based on the name of the file (i.e. a Daily Note file). This allows you to query those tasks by the Scheduled date even if it wasn’t entered when creating the task. While I see how that can be helpful, I don’t use this and leave it toggled off.
- **Next Recurrence Appears on the Line Below** — By default, the next recurrence of the task appears on the line above the current one. I prefer this because I keep most of my tasks in a single note and append new tasks to the top, but if you want new tasks to be added below instead you can toggle this on.
- **Auto-Suggest Task Content** — This shows a pop-up dialog to be shown when typing a task in a note that allows you to select from common task metadata options, like due dates, start dates, and scheduled dates. This is different than the task modal window that shows everything and is designed to give you quick access to some additional metadata features when you are manually typing out the task instead.
- **Provide Access Keys in Dialog** — This lets you quickly toggle options via your keyboard in the modal window when adding tasks. Just press the *Control* and *Option* keys, then the underlined letter in the option you want to access in the modal window (i.e. *⌃-⌥-D* to jump to the *Due Date* field).

Alright, now that we’ve got the settings configured, let’s get into the workflow.

## My Task Management Workflow

The basis for my task management workflow is a concept Cal Newport calls [Multi-Scale Planning](https://www.youtube.com/watch?v=2AHf5r746yU). I wrote previously about [how I implement in this Obsidian](https://thesweetsetup.com/how-mike-does-mutli-scale-planning-in-obsidian/), but the TL;DR is that I think about what I need to do on a couple of different time scales:

- I set *quarterly* intentions based on my [Personal Retreat process](https://thesweetsetup.com/how-to-do-a-personal-retreat-in-obsidian/).
- I plan my week by considering everything that needs to get done in the next 7 days.
- I time block my day in my fancy notebook and select no more than 3-5 tasks to work on.

My time blocking workflow is largely unchanged since [I wrote about it here](https://thesweetsetup.com/mikes-hybrid-bullet-journal-system/), but Obsidian is now the source of the tasks I choose to get done.

With this multi-scale planning workflow as the foundation, I can capture tasks to Obsidian using QuickAdd and have them show up on my lists.

## Capturing Tasks with QuickAdd

[QuickAdd](https://github.com/chhoumann/quickadd) is a great plugin that does a lot, but I use it specifically for capturing things into Obsidian. I’ve written previously about [how I use it to capture things to specific sections of my Daily Note](https://thesweetsetup.com/journaling-workflow-for-appending-to-daily-notes-with-quickadd-video/), but you can also use it to capture tasks using the Tasks plugin’s modal capture window.

Normally, you would use a command in Obsidian to trigger this window once you have the cursor on the line of text where you want the task to appear. But as I mentioned earlier, in Obsidian you need to disconnect from the idea of tasks in specific places. So QuickAdd lets me capture tasks and append them to a specific note in my Obsidian vault (i.e. a note called *Master Task List*).

Here’s how you set it up:

First, go to the QuickAdd settings and add a new *Capture* macro:

![](https://thesweetsetup.com/wp-content/uploads/2024/06/quickadd1.jpg)

Then make sure that *Capture to active file* is toggled off and you’ve set the file you want to capture the task to (mine is set to *Master Task List.md*):

![](https://thesweetsetup.com/wp-content/uploads/2024/06/quickadd2.jpg)

Make sure that all the other toggles are off (including the *Task* option), but toggle on *Capture Format* and use the following code:

``    `js quickadd   return await this.app.plugins.plugins['obsidian-tasks-plugin'].apiV1.createTaskLineModal();`    ``

(Note that code rendering in WordPress removes the three backticks on the first line of the code block and the last line that also has three backticks. You’ll need to add these back to any code block shared in this post before it will render for you.)

This will use the Tasks API when the command is run to open the Task modal capture window.

Lastly, make sure that you’ve toggled on the lightning bolt icon so that the command can show up in the list of commands via the Command Palette:

![](https://thesweetsetup.com/wp-content/uploads/2024/06/quickadd3.jpg)

You’ll also probably want to set a hotkey for this command. I have mine set to *⇧-⌃-⌥-⌘-T*. Then you can use that hotkey to open the task capture modal and add a task to your task list from anywhere.

I mentioned earlier that you can’t really have subtasks in Obsidian, so I’ll often include a link to a checklist in the task description when adding it. For example, I’ll have a task like *Publish Bookworm*, and then I’ll use double brackets to create an internal link to a separate note to use as the checklist (*Bookworm Checklist*).

![](https://thesweetsetup.com/wp-content/uploads/2024/06/checklist.jpg)

When the task shows up in a query, I’ll use the checklist as I go through the steps to complete the task. Then when I’m done, I use a command added by the [Checklist Reset plugin](https://github.com/lhansford/obsidian-checklist-reset) that lets me quickly reset the checklist so that it’s ready to go for next time.

So now that you’ve got a way to capture tasks and a way to link checklists, the next piece is to configure the queries you’re going to use to view your tasks. This will be the basis for your essential lists.

## My Lists

Lists are created by using a Tasks query that looks something like this:

`` `tasks   not done   due tomorrow` ``

Queries give you options for filters, sorting, and grouping so you can create a list of just about anything. You can create a query anywhere in a note by using three backticks, the word tasks, and then your query (followed by three backticks to close the code block).

Task queries can appear anywhere in your Obsidian vault (including wrapped in callouts). But where I find them most helpful is in cards in Obsidian Canvas. For example, here’s what my *Task Dashboard* canvas looks like:

![](https://thesweetsetup.com/wp-content/uploads/2024/06/taskdashboard.jpg)

I check this Task Dashboard in the morning when I’m planning my day and in the afternoon as part of my shutdown routine. I don’t spend a ton of time looking at these, but it helps me quickly get a feel for what’s going on (kind of like my own take on a GTD-style weekly review).

Each of these cards is colored differently to help it stand out and contains a different Tasks query. Here’s each query and a brief explanation of what it does for me.

### Ready

This query shows all the tasks that:

- are not done
- are not in my Chronological Bible Reading note
- have a due date OR scheduled date in the next 7 days
- are sorted by by due date

Here’s the full query (don’t forget to add back the 3 backticks before `tasks` and add three backticks as the last line to close the code block):

`` `tasks   not done   (due before next week) OR (scheduled before next week)   filename does not include Chronological Bible Reading Plan   sort by due   short mode` ``

### Back Burner

This is a simple list of things that are on deck, kind of like a holding tank before I choose the tasks I’m actually going to work on next. It’s a simple tag-based list that shows tasks that:

- are not done
- have the tag #backburner
- are sorted by created date

Here’s the full query:

`` `tasks   not done   tag include #backburner   hide tags   sort by created   short mode` ``

### Waiting

This is another simple tag-based list of tasks that I’m waiting for someone to do something before I can take action on them. These are tasks that:

- are not done
- have the tag #waiting

Because I don’t ever want there to be too many things on this list, I don’t have any sorting applied to this list.

Here’s the full query:

`` `tasks   not done   tag include #waiting   hide tags   short mode` ``

### To Discuss

This is another simple tag-based list of tasks that I need to discuss with someone. There are tasks that:

- are not done
- have the tag #discuss

Again, I don’t want too many of these, so I don’t have sorting applied.

Here’s the full query:

`` `tasks   not done   tag include #discuss   hide tags   short mode` ``

I’ll use both *To Discuss* and *Waiting* in conjunction with people tags so I can create queries that show me the things I need to discuss with someone before I go into a meeting with them.

![](https://thesweetsetup.com/wp-content/uploads/2024/06/peoplequery.jpg)

### Clarify

Yet another simple tag-based list of tasks that I need to spend some time thinking through before I take action on them. These are tasks that:

- are not done
- have the tag #clarify

This is the list I look at when I have a thinking time block on my calendar and I want to get clear on a project before starting it.

Here’s the full query:

`` `tasks   not done   tag include #clarify   hide tags   short mode` ``

### This Month

This is another date-based list that shows all of the tasks that are due this month (but not this week). These are tasks that:

- are not done
- are not in my Chronological Bible Reading note
- has a due date or scheduled date
- have a due date is after this week but in or before next 4 weeks OR scheduled date is after this week but in or before next 4 weeks
- are sorted by due date

This helps me see what’s coming up in the near future.

Here’s the full query:

`` `tasks   not done   (has due date) OR (has scheduled date)   ((due after this week) AND (due in or before next 4 weeks)) OR ((scheduled after this week) AND (scheduled in or before next 4 weeks))   filename does not include Chronological Bible Reading Plan   sort by due   short mode` ``

### Scheduled

These are tasks that have a date applied to them (indicating that they’ve been processed). These are tasks that:

- are not done
- are not in my Chronological Bible Reading note
- have a due date or scheduled date
- have tags hidden (not necessary to see them in this list)

I also have this list limited to 8 things so that it doesn’t scroll in the card in my Obsidian Canvas. If there are more than 8 items that would show up here, it picks the top 8. But once one of those tasks is completed, it grabs another one that meets the criteria and shows it here instead.

Here’s the full query:

`` `tasks   not done   (has due date) OR (has scheduled date)   filename does not include Chronological Bible Reading Plan   hide tags   limit 8   short mode` ``

### Later/Someday

This is basically my take on a someday/maybe list. This is a simple tag-based list that shows long-term tasks I’m not ready to commit to yet. These are tasks that:

- are not done
- have the tag #later
- don’t have a due date
- don’t have a scheduled date

Here’s the full query:

`` `tasks   not done   no due date   no scheduled date   tag include #later   hide tags   limit 8   short mode` ``

### Unscheduled

This a list of things that haven’t been scheduled yet (don’t have a date associated with them). These are tasks that:

- are not done
- are not in my Chronological Bible Reading note
- have no due date
- have no scheduled date

When I’m selecting things to work on for my quarterly or weekly plans, I’ll check this list and see if there’s anything on here that needs to be scheduled.

Here’s the full query:

`` `tasks   not done   (no due date) AND (no scheduled date)   filename does not include Chronological Bible Reading Plan   hide tags   sort by due   limit 8   short mode` ``

### Inbox

This is my version of the inbox in many task managers and shows me tasks that need to be processed further. These are tasks that:

- are not done
- have no due date
- have no scheduled date
- have no tag

For all of these lists, I also use the *short mode* to compress the tasks so that they are easier to read. Because I use the Emoji Task Formatting listed in the settings up above, I can still hover over the icons to view the metadata or edit the task itself in its original location.

Here’s the full query:

`` `tasks   not done   no due date   no scheduled date   no tag   limit 8   short mode` ``

## Conclusion

So there you have it — a comprehensive look at my task management workflow in Obsidian. It’s definitely not for everyone (especially if you rely on location-based reminders), but I love having Obsidian function as the brain for showing me all of my tasks that are available before transferring them to my list for the day.
