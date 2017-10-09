import ipywidgets as widgets
from traitlets import Float, Unicode

@widgets.register
class JupyterProgress(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('JupyterProgressView').tag(sync=True)
    _model_name = Unicode('JupyterProgressModel').tag(sync=True)
    _view_module = Unicode('nengo_progress').tag(sync=True)
    _model_module = Unicode('nengo_progress').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    value = Unicode('Hello World!').tag(sync=True)
    progress = Float(0.).tag(sync=True)
    text = Unicode('').tag(sync=True)
