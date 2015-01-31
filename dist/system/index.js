System.register(["./jade", "./jade-convention"], function (_export) {
  "use strict";

  return {
    setters: [function (_jade) {
      _export("JadeView", _jade.JadeView);
    }, function (_jadeConvention) {
      _export("JadeConventionalView", _jadeConvention.JadeConventionalView);
    }],
    execute: function () {}
  };
});