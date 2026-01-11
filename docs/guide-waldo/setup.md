---
sidebar_position: 1
---

# Setup

## Creating a new Waldo Mod

Make sure the waldo prop is set to `true`.

```json title="mod.json"
{
  "name": "Cool Mod",
  "description": "A super cool mod were making!",
  "author": "Me",
  "version": "1.0.0",
  "homepage": "https://github.com/me/cool-mod",
  // highlight-start
  "waldo": true, // ensure this is set to true
  // highlight-end
  "main": false,
  "dependencies": [],
  "priority": 1,
  "tags": ["cards", "qol"],
}
```

Make a new folder named `waldo` in your mod folder, this is where all your waldo patches will live.

The modloader will automatically intall the WaldoPatcher for you and keep it at the latest version.
If your using a smart code editer like [zed](https://zed.dev/) or [vscode](https://code.visualstudio.com/) you will have autocomplete with anything you can modify! (I personally use and recommend Zed).

When making patch files i recommend naming the file after what it's doing to keep things clear. For example naming the patch file that mods the `Bash Card` bash.js


Now your ready to make the patches!
