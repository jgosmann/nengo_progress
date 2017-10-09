var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var JupyterProgressModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'JupyterProgressModel',
        _view_name : 'JupyterProgressView',
        _model_module : 'nengo_progress',
        _view_module : 'nengo_progress',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        progress : 0.,
        text : ''
    })
});


// Custom View. Renders the widget model.
var JupyterProgressView = widgets.DOMWidgetView.extend({
    render: function() {
        this.$el.css({width: '100%', marginBottom: '0.5em'});
        this.$el.html([
            '<div style="',
                'width: 100%;',
                'border: 1px solid #cfcfcf;',
                'border-radius: 4px;',
                'text-align: center;',
                'position: relative;">',
              '<div class="pb-text" style="',
                  'position: absolute;',
                  'width: 100%;">',
                '0%',
              '</div>',
              '<div class="pb-bar" style="',
                  'background-color: #bdd2e6;',
                  'width: 0%;',
                  'transition: width 0.1s linear;">',
                '&nbsp;',
              '</div>',
            '</div>'].join(''));
        this.model.on('change:progress', this.progress_changed, this);
        this.model.on('change:text', this.text_changed, this);
    },

    progress_changed: function() {
        var progress = 100 * this.model.get('progress');
        this.$el.find('div.pb-bar').width(progress.toString() + '%');
    },

    text_changed: function() {
        this.$el.find('div.pb-text').html(this.model.get('text'));
    }
});


module.exports = {
    JupyterProgressModel : JupyterProgressModel,
    JupyterProgressView : JupyterProgressView
};
