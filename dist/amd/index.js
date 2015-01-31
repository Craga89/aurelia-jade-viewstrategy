define(["exports", "./jade", "./jade-convention"], function (exports, _jade, _jadeConvention) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var JadeView = _interopRequire(_jade);

  var JadeConventionView = _interopRequire(_jadeConvention);

  exports.JadeView = JadeView;
  exports.JadeConventionView = JadeConventionView;
  exports.__esModule = true;
});