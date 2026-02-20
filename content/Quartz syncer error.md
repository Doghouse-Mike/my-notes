---
created: 2026-01-15 13:28:48
modified: 2026-01-28 12:10:17
publish: true
title: Quartz Syncer Error
---

# Quartz Syncer Error

![[32015B70-C455-4FB7-A3C1-BA7967FF650B_4_5005_c 2.jpeg]]

![[D27BC866-4BB1-4F18-927D-B90B361C6B03_4_5005_c.jpeg]]

"Fixed" by using [BRAT](https://github.com/TfTHacker/obsidian42-brat) to roll back to version 1.8.10 of the syncer plugin. 

Apparently it's something to do with the volume of images I've got, and newer versions of the plugin "I suspect is might be a potential bottleneck, as the diffing is now done in-memory in Obsidian, instead of via GitHub API."

Soo, I'll probably look at getting the images hosted elsewhere (so Obsidian/Quartz will just see them as links and spend less resources on them). But happy with sticking to the old version until there's a compelling update. 

## Query Below for Future Ref:

Not entirely sure how, but on my iPad (M1, 16GB ram), when hitting the "open publication centre" button, it'll think about it for a couple of minutes, "retrieving publish status", then Obsidian will crash. Same on iPhone, but less fussed about that. 

On desktop, Obsidian doesn't actually crash, but also doesn't get past "retrieving", eventually coming up with an error:

```
 Uncaught Exception:
RangeError: Array buffer allocation failed
at new ArrayBuffer (<anonymous>)
at new Uint8Array (<anonymous>)
at new FastBuffer (node:internal/buffer:961:5)
at createUnsafeBuffer (node:internal/buffer:1064:12)
at allocate (node:buffer:438:10)
at Function.allocUnsafe (node:buffer:403:10)
at Function.concat (node:buffer:580:25)
at IncomingMessage.<anonymous> (/Users/mike/Library/Application Support/obsidian/obsidian-1.11.4.asar/main.js:38:8855)
at IncomingMessage.emit (node:events:519:28)
at endReadableNT (node:internal/streams/readable:1696:12)
```

Repo is at https://github.com/Doghouse-Mike/my-notes if that helps. I assume I've borked something there, rather than it being a local issue. npm quartz sync still works

Thus far, in no particular order, I have:

- generated a new access token (syncer plugin settings has always said "connection successful!"
- removed/reinstalled the plugin
- deleted the "content" folder entirely, then reuploaded it
- cleared cache (from plugin settings), turned caching off entirely, poked some other buttons.

Everything appears to be up to date, Version 1.11.5 of obsidian on desktop and mobile, all plugins updated etc. iPad is on 26.3 beta, but issue appears on current 26.2 Tahoe and whatever the last Sequoia release is. 

Not a game breaker as I can still update the "old fashioned way", like an animal, but any ideas would be grand!
