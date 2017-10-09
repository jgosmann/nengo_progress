nengo_progress
===============================

Prototyping a new Jupyter widget implementation of the Nengo progress bar.

Installation
------------

To install use pip:

    $ pip install nengo_progress
    $ jupyter nbextension enable --py --sys-prefix nengo_progress


For a development installation (requires npm),

    $ git clone https://github.com/jgosmann/nengo_progress.git
    $ cd nengo_progress
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix nengo_progress
    $ jupyter nbextension enable --py --sys-prefix nengo_progress
