---
{"publish":true,"permalink":"/Setting themes in Ubuntu.md","title":"Setting Themes in Ubuntu","created":"2026-06-14 09:06:36","modified":"2026-06-17 21:39:43","cssclasses":""}
---


# Setting Themes in Ubuntu

Twas a bit of a challenge working out how, and getting https://github.com/MathisP75/daemon-kde-mk2 set up. 

If I'm gonna be dicking around in Linux, I may as well have it look pretty, no?

Skip straight to [[Setting themes in Ubuntu#After some palaver]] for what actually worked.

The full instructions read:

git clone https://github.com/MathisP75/daemon-kde-mk2.git

cd daemon-kde-mk2

cp 'Color Scheme/Daemon2.colors' $HOME/.local/share/color-schemes/

cp -r Kvantum/daemon-2.0 $HOME/.config/Kvantum/

cp -r 'Icon Theme/Daemon-Icons' $HOME/.local/share/icons/

cp -r 'Plasma Style/Daemon-2.0' $HOME/.local/share/plasma/desktoptheme/

cp -r 'Window Decorations/daemon-2.0' $HOME/.local/share/aurorae/themes/

cp Konsole/Daemon-2.0.colorscheme $HOME/.local/share/konsole/

cp -r VSCode/daemon-2-0 $HOME/.vscode-oss/extensions/

cp Kitty/Daemon-2.0.conf $HOME/.config/kitty/

cp 'Color Scheme/Daemon2.colors' $HOME/.local/share/color-schemes/ was giving me the error "cp: cannot create regular file '/home/mike/.local/share/color-schemes/': Not a directory"

What fixed it was to first run:

rm ~/.local/share/color-schemes

mkdir -p ~/.local/share/color-schemes

The next few worked too (with sudo in front of em). Til we get to 

```
cp -r 'Window Decorations/daemon-2.0' $HOME/.local/share/aurorae/themes/
```

SO, mkdir again?

rm ~/.local/share/aurorae/themes/

mkdir -p ~/.local/share/aurorae/themes/

Success!

Same for the next couple, paired them up below

mkdir -p ~/.local/share/konsole/

cp Konsole/Daemon-2.0.colorscheme $HOME/.local/share/konsole/

mkdir -p ~/.vscode-oss/extensions/

cp -r VSCode/daemon-2-0 $HOME/.vscode-oss/extensions/

## After Some Palaver:

### 1. Theme Installation StatusThe Daemon Theme Was Installed Locally Here:

``` ~/.local/share/plasma/look-and-feel/Daemon-2.0 ```

Verification: ``` bashls ~/.local/share/plasma/look-and-feel/ ```

Expected output:

- Daemon-2.0
- MatrixCode (later identified as problematic)

---

### 2. Fix Plasma Theme Detection

Rebuild KDE system cache:

```
kbuildsycoca6 --noincremental
```

This ensures Plasma detects newly installed Look-and-Feel themes.

---

### 3. Restart Plasma Shell (normal method)

```
plasmashell --replace
```

---

### If DBus Error Occurs:

```
export $(dbus-launch)plasmashell --replace
```

This restores the missing DBus session context.

---

### 4. Confirm Available Themes

```
plasma-apply-lookandfeel --list
```

Daemon appeared correctly:

- Daemon-2.0

---

### 5. Apply Daemon Theme

Correct command syntax:

```
plasma-apply-lookandfeel --apply Daemon-2.0
```

---

### 6. Kvantum Installation (Ubuntu/Kubuntu)

Correct packages (not just `kvantum`):

```
sudo apt install qt6-style-kvantum qt5-style-kvantum qt-style-kvantum-themes
```

Optional GUI tool:

```
sudo apt install kvantum-manager
```

---

### 7. Snap Vivaldi Icon Issue (Root Cause)

Vivaldi Snap used a hardcoded icon path:

```
Icon=/snap/vivaldi/current/meta/gui/icon.png
```

This bypasses KDE icon theming entirely.

---

### 8. Fix Vivaldi Icon (Correct Method)

#### Step 1: Locate Snap Launcher

```
/var/lib/snapd/desktop/applications/vivaldi_vivaldi-stable.desktop
```

---

#### Step 2: Create Local Applications Folder (if missing)

```
mkdir -p ~/.local/share/applications
```

---

#### Step 3: Copy Launcher Locally

```
cp /var/lib/snapd/desktop/applications/vivaldi_vivaldi-stable.desktop ~/.local/share/applications/
```

---

#### Step 4: Edit Icon Line

Change this:

```
Icon=/snap/vivaldi/current/meta/gui/icon.png
```

To:

```
Icon=vivaldi
```

---

#### Step 5: Refresh KDE Cache

```
kbuildsycoca6 --noincremental
```

---

#### Step 6: Restart Plasma Safely

```
export $(dbus-launch)plasmashell --replace
```

---

### 9. KDE Icon Resolution Order

KDE resolves icons in this order:

1. `~/.local/share/icons`
2. Active icon theme (Daemon)
3. `/usr/share/icons`
4. App-provided fallback (Snap path / embedded icons)

---

### 10. Key Lessons Learned

#### Plasma 6 Notes

- `kstart6` is not consistently available
- Use `plasmashell --replace` instead

#### DBus Dependency

- Plasma CLI tools require active DBus session
- Fix with:

    ```
    export $(dbus-launch)
    ```

#### Snap Packaging Quirk

- Snap `.desktop` files often hardcode icon paths
- Best fix is overriding locally via:

    ```
    ~/.local/share/applications/
    ```

#### Theme Behaviour

- Daemon theme applies correctly once icon names (not file paths) are used
- Theme consistency depends heavily on icon name resolution, not file paths

### 11. Final Result

- Kubuntu Plasma 6 stable
- Daemon-2.0 global theme applied
- Kvantum installed for Qt styling
- Vivaldi icon correctly themed
- Snap launcher properly overridden
- Plasma restart + DBus recovery method confirmed working
