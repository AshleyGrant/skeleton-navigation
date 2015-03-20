System.register(["aurelia-framework"], function (_export) {
  var Behavior, _createClass, _classCallCheck, Slave;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Slave = _export("Slave", (function () {
        function Slave() {
          _classCallCheck(this, Slave);

          this.compareString = "I'm awesome";
        }

        _createClass(Slave, null, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("subtitle").and(function (x) {
                return x.bindingIsTwoWay();
              }).withProperty("compareString").withProperty("number");
            }
          }
        });

        return Slave;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsYXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxRQUFRLGlDQUVILEtBQUs7Ozs7QUFGVixjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7OztBQUVILFdBQUs7QUFPTCxpQkFQQSxLQUFLLEdBT0Y7Z0NBUEgsS0FBSzs7QUFRZCxjQUFJLENBQUMsYUFBYSxHQUFHLGFBQWMsQ0FBQztTQUNyQzs7cUJBVFUsS0FBSztBQUNULGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUU7ZUFBQSxDQUFDLENBQ3RELFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FDN0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hDOzs7O2VBTFUsS0FBSyIsImZpbGUiOiJzbGF2ZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9