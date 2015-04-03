System.register(["aurelia-framework"], function (_export) {
  var Behavior, _prototypeProperties, _classCallCheck, InnerHTML;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      InnerHTML = _export("InnerHTML", (function () {
        function InnerHTML(element) {
          _classCallCheck(this, InnerHTML);

          this.element = element;
        }

        _prototypeProperties(InnerHTML, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("inner-html").withOptions().and(function (x) {
                x.withProperty("sanitizer", "sanitizerChanged");
                x.withProperty("value", "valueChanged");
              });
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(text) {
              if (this.sanitizer) {
                text = this.sanitizer(text);
              } else {
                var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

                while (SCRIPT_REGEX.test(text)) {
                  text = text.replace(SCRIPT_REGEX, "");
                }
              }
              this.element.innerHTML = text;
            },
            writable: true,
            configurable: true
          },
          sanitizerChanged: {
            value: function sanitizerChanged(newSanitizer) {
              this.sanitizer = newSanitizer;
            },
            writable: true,
            configurable: true
          }
        });

        return InnerHTML;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlubmVyLWh0bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEseUNBRUgsU0FBUzs7OztBQUZkLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRUgsZUFBUztBQVdULGlCQVhBLFNBQVMsQ0FXUixPQUFPO2dDQVhSLFNBQVM7O0FBWWxCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzs2QkFiVSxTQUFTO0FBQ2Isa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ2QsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQzlCLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBRSxVQUFBLENBQUMsRUFBSTtBQUN2QixpQkFBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUNoRCxpQkFBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7ZUFDekMsQ0FBQyxDQUFDO2FBQ0o7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFLckMsc0JBQVk7bUJBQUEsc0JBQUMsSUFBSSxFQUFDO0FBQ2hCLGtCQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDakIsb0JBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2VBQzdCLE1BQ0k7QUFDSCxvQkFBSSxZQUFZLEdBQUcscURBQXFELENBQUM7O0FBRXpFLHVCQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDOUIsc0JBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDdkM7ZUFDRjtBQUNELGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDL0I7Ozs7QUFFRCwwQkFBZ0I7bUJBQUEsMEJBQUMsWUFBWSxFQUFFO0FBQzdCLGtCQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQzthQUMvQjs7Ozs7O2VBL0JVLFNBQVMiLCJmaWxlIjoiaW5uZXItaHRtbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9