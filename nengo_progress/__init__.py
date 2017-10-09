from ._version import version_info, __version__

from .progress_widget import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'nengo_progress',
        'require': 'nengo_progress/extension'
    }]
