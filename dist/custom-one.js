System.register(["aurelia-framework"], function (_export) {
  var Behavior, _createClass, _classCallCheck, CustomOne;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CustomOne = _export("CustomOne", (function () {
        function CustomOne() {
          _classCallCheck(this, CustomOne);

          this.items = [];
        }

        _createClass(CustomOne, {
          valueChanged: {
            value: function valueChanged(value) {
              this.value = value;
            }
          },
          addChild: {
            value: function addChild() {
              this.items.push(this.items.length);
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("value").and(function (x) {
                return x.bindingIsTwoWay();
              });
            }
          }
        });

        return CustomOne;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1vbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsaUNBRUgsU0FBUzs7OztBQUZkLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRUgsZUFBUztBQUdULGlCQUhBLFNBQVMsR0FHTjtnQ0FISCxTQUFTOztBQUlsQixjQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjs7cUJBTFUsU0FBUztBQU9wQixzQkFBWTttQkFBQSxzQkFBQyxLQUFLLEVBQUU7QUFDbEIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCOztBQUVELGtCQUFRO21CQUFBLG9CQUFHO0FBQ1Qsa0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEM7OztBQVpNLGtCQUFRO21CQUFBLG9CQUFFO0FBQUUscUJBQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUU7ZUFBQSxDQUFDLENBQUM7YUFBRTs7OztlQUQ5RSxTQUFTIiwiZmlsZSI6ImN1c3RvbS1vbmUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==