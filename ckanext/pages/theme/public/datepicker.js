this.ckan.module('datepicker', function (jQuery, _) {
  return {
    initialize: function () {
      console.log('moo')
      jQuery.proxyAll(this, /_on/);
      this.el.ready(this._onReady);
    },

    _onReady: function() {
      var editor = $(this.el).datepicker();
    }
  }
});