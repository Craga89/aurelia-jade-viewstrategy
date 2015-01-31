System.register(["aurelia-metadata", "jade"], function (_export) {
  "use strict";

  var Origin, JadeView, _prototypeProperties, _get, _inherits, JadeConventionView;
  return {
    setters: [function (_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }, function (_jade) {
      JadeView = _jade["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      JadeConventionView = (function (JadeView) {
        function JadeConventionView(viewModel, isCompiled) {
          this.moduleId = Origin.get(viewModel.constructor).moduleId;

          return _get(Object.getPrototypeOf(JadeConventionView.prototype), "constructor", this).call(this, JadeConventionView.convertModuleIdToViewUrl(this.moduleId), isCompiled);
        }

        _inherits(JadeConventionView, JadeView);

        _prototypeProperties(JadeConventionView, {
          convertModuleIdToViewUrl: {
            value: function convertModuleIdToViewUrl(moduleId, isCompiled) {
              return moduleId + ".jade";
            },
            writable: true,
            configurable: true
          }
        });

        return JadeConventionView;
      })(JadeView);
      _export("default", JadeConventionView);
    }
  };
});