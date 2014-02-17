LightTable-Gist
===============

Gist the current tab

Installation
============

* `gem install gist` (required)
* From `Plugin Manager` install `Gist`

Development
===========

* From `Plugin Manager` uninstall `Gist`
* `gem install gist` (required)
* Clone the repo into your plugins folder
  * On OS X: `~/Library/Application Support/LightTable/plugins/`
  * On Linux: `~/.config/LightTable/plugins/`
  * On Windows: `%APPDATALOCAL%/LightTable/plugins/`
* Open `gist.cljs`
* Save `gist.cljs` or run the command `Editor: Build file or project`. You should see "Compiled plugin to ...gist_compiled.js" in the statusbar
* Run the command `Plugins: Refresh plugin list` to detect the plugin
* Save `gist.behaviors` or run the command `App: Reload behaviors` to load/reload the plugin behaviors

Bindings
========

Add,

    "<keybinding>" [:gist.submit]

in user.keymap, under :editor

TODO
====

* Add github Api keys
* Make it pure node.js


License
=======
public domain
