System.register(["aurelia-framework"], function (_export) {
  var Behavior, _prototypeProperties, _classCallCheck, CustomOne;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CustomOne = _export("CustomOne", (function () {
        function CustomOne() {
          _classCallCheck(this, CustomOne);

          this.items = [];
        }

        _prototypeProperties(CustomOne, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("value").and(function (x) {
                return x.bindingIsTwoWay();
              });
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(value) {
              this.value = value;
            },
            writable: true,
            configurable: true
          },
          addChild: {
            value: function addChild() {
              var model = {
                prop1: this.items.length
              };

              this.items.push(model);
            },
            writable: true,
            configurable: true
          }
        });

        return CustomOne;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1vbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEseUNBRUgsU0FBUzs7OztBQUZkLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRUgsZUFBUztBQUdULGlCQUhBLFNBQVM7Z0NBQVQsU0FBUzs7QUFJbEIsY0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7OzZCQUxVLFNBQVM7QUFDYixrQkFBUTttQkFBQSxvQkFBRTtBQUFFLHFCQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO2VBQUEsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBTXpGLHNCQUFZO21CQUFBLHNCQUFDLEtBQUssRUFBRTtBQUNsQixrQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRztBQUNULGtCQUFJLEtBQUssR0FBRztBQUNWLHFCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2VBQ3pCLENBQUM7O0FBRUYsa0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOzs7Ozs7ZUFqQlUsU0FBUyIsImZpbGUiOiJjdXN0b20tb25lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=