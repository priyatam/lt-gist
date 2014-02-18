LightTable-Gist
===============

Gist the current tab.

Usage
=====

Install the gem for gist:

    gem install gist

Make sure LT_HOME is setup on your ENV.

Ctrl-Space `Show plugin Manager`, click on 'Available' and browse for `Gist`.

Click install.

For keybindings, `Ctrl-Space` User-Keymap, click and open it.

Under the :editor map, paste something the following key binding pair: 

    "ctrl-shift-g" [:gist.submit]

Of course, you can set your own binding.

Pull Requests
=============

* If you installed the plugin via Plugin manager, uninstall `Gist`
* Clone the repo into your plugins folder
  * On OS X: `~/Library/Application Support/LightTable/plugins/`
  * On Linux: `~/.config/LightTable/plugins/`
  * On Windows: `%APPDATALOCAL%/LightTable/plugins/`
* Open `gist.cljs`
* Save `gist.cljs` or run the command `Editor: Build file or project`. You should see "Compiled plugin to ...gist_compiled.js" in the statusbar
* Ctrl-Space `Plugins: Refresh plugin list` to detect the plugin
* Save `gist.behaviors` or run the command `App: Reload behaviors` to load/reload the plugin behaviors

TODO
====

* Add github Api keys

License
=======
public domain
