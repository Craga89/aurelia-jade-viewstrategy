System.register(["./jade", "./jade-convention"], function (_export) {
  "use strict";

  var JadeView, JadeConventionView;
  return {
    setters: [function (_jade) {
      JadeView = _jade["default"];
    }, function (_jadeConvention) {
      JadeConventionView = _jadeConvention["default"];
    }],
    execute: function () {
      _export("JadeView", JadeView);

      _export("JadeConventionView", JadeConventionView);
    }
  };
});