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
        }

        _createClass(CustomOne, {
          valueChanged: {
            value: function valueChanged(value) {
              this.value = value;
            }
          },
          toggleValue: {
            value: function toggleValue() {
              this.value = this.value !== true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1vbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsaUNBRUgsU0FBUzs7OztBQUZkLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRUgsZUFBUztpQkFBVCxTQUFTO2dDQUFULFNBQVM7OztxQkFBVCxTQUFTO0FBR3BCLHNCQUFZO21CQUFBLHNCQUFDLEtBQUssRUFBRTtBQUNsQixrQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7O0FBRUQscUJBQVc7bUJBQUEsdUJBQUc7QUFDWixrQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQzthQUNsQzs7O0FBUk0sa0JBQVE7bUJBQUEsb0JBQUU7QUFBRSxxQkFBTyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtlQUFBLENBQUMsQ0FBQzthQUFFOzs7O2VBRDlFLFNBQVMiLCJmaWxlIjoiY3VzdG9tLW9uZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9