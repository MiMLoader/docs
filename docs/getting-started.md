---
sidebar_position: 2
---

# Getting Started

## Creating a mod schema

First we need to make a folder for our mod. This *has* to be named the exact same as our mod name for the modloader to find it correctly.

Lets call our mod `Cool Mod`.
Make a folder name `Cool Mod` in the mods folder of the modloaders files.

In this folder we need a `mod.json`, this tells the modloader all the info about our mod and how to load it.

```json title="mod.json"
{
  "name": "Cool Mod",
  "description": "A super cool mod were making!",
  "author": "Me", // Your name here!
  "version": "1.0.0", // Please use semantic versioning (https://semver.org) for the version numbers
  "homepage": "https://github.com/me/cool-mod", // this can be a github repo or just a website that links to you mod. (or an empty string)
  "waldo": true, // if your mod uses the waldo patcher
  "main": "main.js", // the main script of your mod if you need it, if not set it to false
  "dependencies": [], // the dependencies of you mod
  "priority": 1, // you can set this to any number as it isn't used anymore
  "tags": ["cards", "qol"], // the tags that say what your mod does
}
```

Now you have a mod schema you can start coding your mod!
