---
created: 2026-05-03 13:14:58
modified: 2026-06-24 21:07:02
publish: true
title: Linux Fundamentals
---

# Linux Fundamentals

Useful to know (when you forget where new things get installed)

| **Path** | **Description**                                                                                                                                                                                                                                                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`      | The top-level directory is the root filesystem and contains all of the files required to boot the operating system before other filesystems are mounted, as well as the files required to boot the other filesystems. After boot, all of the other filesystems are mounted at standard mount points as subdirectories of the root. |
| `/bin`   | Contains essential command binaries.                                                                                                                                                                                                                                                                                               |
| `/boot`  | Consists of the static bootloader, kernel executable, and files required to boot the Linux OS.                                                                                                                                                                                                                                     |
| `/dev`   | Contains device files to facilitate access to every hardware device attached to the system.                                                                                                                                                                                                                                        |
| `/etc`   | Local system configuration files. Configuration files for installed applications may be saved here as well.                                                                                                                                                                                                                        |
| `/home`  | Each user on the system has a subdirectory here for storage.                                                                                                                                                                                                                                                                       |
| `/lib`   | Shared library files that are required for system boot.                                                                                                                                                                                                                                                                            |
| `/media` | External removable media devices such as USB drives are mounted here.                                                                                                                                                                                                                                                              |
| `/mnt`   | Temporary mount point for regular filesystems.                                                                                                                                                                                                                                                                                     |
| `/opt`   | Optional files such as third-party tools can be saved here.                                                                                                                                                                                                                                                                        |
| `/root`  | The home directory for the root user.                                                                                                                                                                                                                                                                                              |
| `/sbin`  | This directory contains executables used for system administration (binary system files).                                                                                                                                                                                                                                          |
| `/tmp`   | The operating system and many programs use this directory to store temporary files. This directory is generally cleared upon system boot and may be deleted at other times without any warning.                                                                                                                                    |
| `/usr`   | Contains executables, libraries, man files, etc.                                                                                                                                                                                                                                                                                   |
| `/var`   | This directory contains variable data files such as log files, email in-boxes, web application related files, cron files, and more.                                                                                                                                                                                                |

[Explainshell](https://explainshell.com/) may be useful if something gets proper donked. 

`sudo apt update && sudo apt upgrade -y` is your best pal

And `sudo apt autoremove`

Otherwise some combination of `-h` `--help` or just a bare command with no arguments churns out all kinds of info without delving into `man` pages.

EG: `git --help`

`pwd` is "where am I?"

`apropos` is probably gonna be super useful. Kinda finds all the instances of the search term in available commands (if I can't recall the specific name of a command, but think it exists) EG: `apropos usb` will spit out:

> `bhp-config_usb_printer (1) - HP device config us…`
> `ipp-usb (8) - Daemon for IPP over USB …`
> `lsusb (8) - list USB devices`
> `sane-canon630u (5) - SANE backend for the Can…`
> `sane-canon_lide70 (5) - SANE backend for the Ca…`
> `sane-cardscan (5) - SANE backend for Corex C…`
> `sane-epjitsu (5) - SANE backend for Epson-b…`
> `sane-find-scanner (1) - find SCSI and USB scann…`
> `sane-genesys (5) - SANE backend for GL646, …`
> `sane-gt68xx (5) - SANE backend for GT-68XX…`
> `sane-kvs1025 (5) - SANE backend for Panason…`
> `sane-kvs20xx (5) - SANE backend for Panason…`
> `sane-kvs40xx (5) - SANE backend for Panason…`
> `sane-ma1509 (5) - SANE backend for Mustek …`
> `sane-mustek_usb (5) - SANE backend for Mustek …`
> `sane-mustek_usb2 (5) - SANE backend for SQ113 b…`
> `sane-pieusb (5) - SANE backend for USB-con…`
> `sane-plustek (5) - SANE backend for LM983[1…`
> `sane-sm3600 (5) - SANE backend for Microte…`
> `sane-sm3840 (5) - SANE backend for Microte…`
> `sane-u12 (5) - SANE backend for Plustek…`
> `sane-usb (5) - USB configuration tips f…`
> `usb-devices (1) - print USB device details`
> `usb_modeswitch (1) - control the mode of 'mul…`
> `usb_modeswitch_dispatcher (1) - Linux wrapper f…`
> `usb_printerid (1) - prints the ID of the pri…`
> `usbhid-dump (8) - dump USB HID device repo…`
> `usbip (8) - manage USB/IP devices`
> `usbipd (8) - USB/IP server daemon`
> `usbmuxd (8) - Expose a socket to multi…`
> `usbreset (1) - send a USB port reset to`

## "Useful" cOmmands sTolen from a tHread on cYberspace

1. `du -sh <directory>` Shows human readable total size of a directory. `du` by itself shows all subdirectories and uses bytes.
2. `tree -a -L 3` Shows a directory structure in a tree view, including hidden files or directories, 3 levels deep.
3. `tar czf archive.tar.gz <directory>` Compresses a directory, crating a gunzip archive.
4. `tar xzf archive.tar.gz` Extract a gunzip archive.
5. `find . -type f -name "*md" -exec grep something {} \;` Starting at in the current directory, recursively search for all files ending in "md", within each such file look for a word "something".
6. I like the tee command. Quite useful.
7. ls -larth # for some reason I can remember larth quite goods 
8. not a command but ctrl+r is hella useful 
9. ncdu # what the fuck takes up my whole space

Ok, hackthebox is a bit *too* particular on its quizzes. "bin/bash" and "bash" were incorrect. "/bin/bash" was the right answer. Frustrate. 

Mused that Linux is a bit like lockpicking. You get things in just the right order and magic happens. *Or* you try what feel like the same thing over and over and eventually it works. I'm not sure what macOS/windows would be in this tortured analogy. I guess that's much like anything when learning though. Expertise goes up, jiggling things around til they work goes down, one supposes. 

dpkg vs apt. 

dpkg is more "low level"

but that's the .deb files (or.rpm) from downloading. 

dpkg doesn't pick up any dependencies automatically. 

APT=advanced package tool

Will fix things that dpkg "broke". Higher level. 

Fetches dependencies automagically. 

Wise to run `apt update` *before* installing anything. 

That's answered that then. `update` refreshes the list of stuff my install "knows" exists, `upgrade` etc actually installs/updates software. 

`sudo apt remove [package]` to "delete" stuff. This *won't* get rid of any user data.

`sudo apt purge [package]` *will* get rid of user data

Snap is another package manager. More like a store. 

`sudo snap install` or `sudo snap install --classic` and name of package. EG I now have vs code courtesy of `sudo snap install --classic code`!

Pip is Python's package manager. `pip` or `pip3`

Ruby has Gems. `gem install`

Aptitude is fancy

And our old pal git. 

Git to download stuff, the actual installation might require running python or something from the cloned folder. 
