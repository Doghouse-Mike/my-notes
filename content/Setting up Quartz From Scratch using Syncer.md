---
created: 2026-02-18 08:27:43
modified: 2026-02-18 20:23:16
publish: true
title: Setting Up Quartz From Scratch Using Syncer
---

# Setting Up Quartz From Scratch Using Syncer

Prompted by some chats in [the discord](https://discord.gg/cRFFHYye7t), a (hopefully) straightforward guide to getting [Quartz]([https://quartz.jzhao.xyz](https://quartz.jzhao.xyz/)) set up with [Obsidian]([https://obsidian.md](https://obsidian.md/)). Mostly following the [official docs](https://saberzero1.github.io/quartz-syncer-docs/Guides/GitHub-Setup). One could probably skip the first couple of steps if you've already got a Quartz repo, but this is a test to show you don't need a local install of Quartz. I think I'd still prefer to have that local copy so a manual `npx quartz sync` etc remains available, even if 99% of the time publishing will be handled by [the plugin](https://github.com/saberzero1/quartz-syncer). Then again, I guess that could be set up later if required. 

I reserve the right to donk some technical terms. This entire thing was done using an iPad. As far as Obsidian goes it faces the same constraints as the smaller "mobile" versions, so apart from the bigger screenshots, this should be just as possible on a phone. 

## Install the Quartz Syncer Plugin

Kinda step zero. Don't need to do anything with it yet, but good to have it ready to go for later. 

## Get Quartz Setup in Github

Just because that's what I know. Other options are available.

![[Pasted image 20260218083207.png]]

[Click here](https://github.com/new?template_name=quartz&template_owner=jackyzha0) to create a copy of the Quartz repo All of your own to futz with.

Name it, throw in a description, hit "Create repository"

![[Pasted image 20260218084215.png]]

## Enable GitHub Pages

1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Source**, select **GitHub Actions**.

## Create the deploy.yml File In the .github/workflows Folder

Click the "code" bit in the top left of the GitHub window

![[Pasted image 20260218084818.png]]

Then ya want that .github/workflows folder, then "Add file" (top right)

![[Pasted image 20260218195238.jpg]]

Copy/paste the code from [this page](https://saberzero1.github.io/quartz-syncer-docs/Guides/GitHub-Setup), don't forget to add the .yml extension or nothing will work. Not sure if case is important, but caught my iPad trying to capitalise "deploy"

![[Pasted image 20260218085330.png]]

(Also that should by `.yml`, *not* the `.yaml` I've done in the screenshot. Insert facepalm emoji.)

## Access Tokens

Setup Ala:

1. Go to [GitHub’s Personal Access Token page](https://github.com/settings/personal-access-tokens/new).
2. Set a **Token name**
3. Set an **Expiration** date
4. Under **Repository access**, select **Only select repositories** and choose your Quartz repository.
5. Under **Permissions** > **Repository permissions**, set **Contents** to **Read and write**.
6. Click **Generate token**.
7. Copy the token immediately.
![[Pasted image 20260218182139.png]]

Could set the token to never expire, weigh the security/hassle ratio for yourself.

## Set Up Quartz Syncer

1. Open Obsidian and go to **Settings** > **Community Plugins** > **Quartz Syncer**.
2. In the **Git** settings tab:
    - **Remote URL**: `https://github.com/<username>/<repository>.git`
    - **Branch**: `v4` (or your Quartz branch)
    - **Provider**: GitHub
    - **Authentication Type**: Username & Token/Password
    - **Username**: Your GitHub username
    - **Access Token**: The token you generated

**A green checkmark indicates a successful connection.**

(Yours will look different, based on theme, and obvs will have your GitHub deets)

![[Pasted image 20260218183126.png]]

The rest of the settings are down to preference/setup, but mine look like:

![[Pasted image 20260218183412.png]]

I haven't bothered setting up a custom domain for this repo, as it's a test that I'll probably throw away in a minute or five (Or just leave it to languish forever).

Hit that "Open Publication Centre" command, and give it a minute to think about it

![[Pasted image 20260218195549.jpg]]

[That's it?](https://doghouse-mike.github.io/Bin-me/)

![[Pasted image 20260218195408.png]]

This would be where I recall some parts from the official docs around tweaking `quartz.config.ts` with domains, comments, setting up [themes](https://github.com/saberzero1/quartz-themes) etc. Some of which is covered in [[Mostly How I Built This Site]] but [you get what you get.](https://www.youtube.com/watch?v=_1-ouKP-qZU&list=RD_1-ouKP-qZU&start_radio=1)
