---
tags:
  - slurp/iphone-tagging-avif
date created: Sunday, June 23rd 2024, 8:43:58 pm
date modified: Thursday, March 6th 2025, 10:28:01 pm
excerpt: First, there seems to be a misconception that Dimspirations are
link: https://brettterpstra.com/2024/04/01/automating-the-dimspirations-workflow/
site: BrettTerpstra.com
slurped: 2024-06-23T20:43
title: Automating the Dimspirations Workflow - BrettTerpstra.com
twitter: https://twitter.com/@ttscoff
---

# Automating the Dimspirations Workflow - BrettTerpstra.com

First, there seems to be a misconception that [Dimspirations](https://dimspire.me/) are generated with AI or some other such trickery. I want to assure you that, while the entire process of posting them is automated, each Dimspiration is lovingly crafted by me in Affinity Photo[1](https://brettterpstra.com/2024/04/01/automating-the-dimspirations-workflow/#fn:subscription).

I wanted to detail the automation though, partially for my own reference, and partially just because I’m pretty proud of the system.

## The Template

First, I have a template I load up in Affinity Photo. It has guides for all of the various formats that will be produced from the single output file. All I have to do is make sure that the text and necessary parts of background images fit into the smallest guide rectangle, and that the rest of the space is filled with a reasonable amount of background image or matching color. The tallest output is the iPhone version, which on occasion just gets filled with a background color, but I can usually make a background pattern or image fit nicely for iPhone and still look good for all of the other formats.

Affinity Photo template

I have a Dimspirations [Bunch](https://bunchapp.co/) that opens the template in Affinity Photo, loads up the Desktop and Dimspirations folder in Finder tabs (for keeping track of the rest of the process below), and opens up Adobe Stock in my browser for grabbing those sweet, sweet background images. So to get started on a Dimspiration, I just hit `Hyper-D, Shift-D` (my assigned shortcuts in Bunch).

The new Dimspiration gets saved-as with a slugified version of the title I want it to have on the site, e.g. “The end of the world” gets saved as `the-end-of-the-world.afphoto`. Then I output a JPEG of the whole image with the same slug (populated by default), tag it with `.dim` in the save panel, and save it to the Desktop.

## Hazel and RetroBatch

Hazel watches the Desktop for `.dim` JPEGS, removes the `.dim` tag, and automatically opens the image in a [RetroBatch](https://flyingmeat.com/retrobatch/ "Retrobatch 2, from Flying Meat") applet called “Dimspiration.”

RetroBatch applet

The RetroBatch applet saves various formats with `-rb` suffix (3 desktop wallpapers, 1 iPhone wallpaper, Twitter and Facebook preview images, an Instagram-ready version, and the 1x and 2x versions of the square image for the website). Upon writing the files, they then get sent to [ImageOptim](https://imageoptim.com/mac "better Save for Web") for optimization. The optimized files get saved to a new “Dimspirations” folder.

Hazel watches the “Dimspirations” folder and copies wallpaper formats to an upload folder, where Hazel (again) uploads those images to Flickr as screenshots in a DimPapers album, then deletes the copied files.

Hazel then moves all of the image files to the Dimspire.me website assets folder.

## Rake and Howzit

I then open up iTerm (visor mode because I’m not an animal), switch to the dimspire.me directory, and run `rake`. The wallpaper download zips, WEBP and AVIF versions, and Markdown post are created. The Rake task looks for new JPEGs, extracts their base name, and generates Markdown files for any new ones. It automatically adds YAML frontmatter to each post:

- A title extrapolated from the image slug, where `end-of-the-world` becomes “End of the world”
- the base image slug, which is used to extrapolate the square and @2x versions for display
- a “manifest” section with a list of files in the zip download
- An ALT tag auto-generated with [textra](https://github.com/freedmand/textra), which runs Apple’s built-in OCR on the image to extract its text
- a short url created with a curl call to [dim.moi](https://brettterpstra.com/2024/03/16/build-a-custom-url-shortener/)

A dimspiration post

The Rake task outputs the Markdown file’s filename, which I can just ⌘-Click (iTerm) to open in [MultiMarkdown Composer](https://multimarkdown.com/ "MultiMarkdown Composer"), where I double check the ALT tag and add a snarky caption as the body content.

In my [Howzit](https://brettterpstra.com/projects/howzit/) [buildnotes file](https://brettterpstra.com/2022/08/09/getting-started-with-howzit/) I have sections for previewing and deploying, so I can just run `howzit -r deploy` to deploy the site, which calls the necessary Rake tasks and uses rsync to copy the entire rendered site to the server. CSS and JS (and all images) are served from a CDN which uses versioning like `filename.1234.css`, and if I want to upload changes to any of these files, I need to bump the version number before rendering, so the Howzit task will ask me upon deploy if it should bump the version. If I haven’t made any changes and have only added a new Dimspiration, I can just hit `n` and it will avoid clearing the CDN cache.

buildnotes.md for dimspire.me

The site runs on Jekyll, so mass updating the posts can be done just by searching and replacing in Markdown files. The Rakefile has tasks for updating all of the zip downloads with any new versions of the images that have been added (and updating the manifest data in every post with any changes), batch adding any missing ALT tags, and creating all missing WEBP and AVIF versions at once. Whenever I just run `rake`, all of these tasks execute in sequence, so every time I publish it’s filling in any missing pieces, not just the latest post. It takes about 20 seconds to run all of the tasks on all of the posts at this point, though the zip creation (which rebuilds all zips on every update) will take increasingly longer as the number of posts grows. I’ll deal with making it more incremental when that actually becomes a burden.

So my (manual) part of the process is:

1. Lovingly craft a Dimspiration in Affinity Photo and save it to the Desktop
    - Wait a minute for Hazel/RetroBatch/ImageOption to do their things
2. `cd` to the Dimspire.me website directory and run `rake`
3. Open the created post and edit two lines
4. Run `howzit -r deploy` (which with my aliases and fuzzy completion is just `bld dep`, and thanks to Fish’s directory-sensitive history, is just a matter of typing B⌃F)

As always, if you have any questions about *any* part of this that you’d be interested in implementing on your own, please join us [in the forum](https://forum.brettterpstra.com/) and ask away! And as always, I’d love it if you checked out [Dimspirations](https://dimspire.me/) and the [Dimspirations Store](https://dimspire.sellfy.store/).
