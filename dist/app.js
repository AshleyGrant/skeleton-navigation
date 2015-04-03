System.register(["aurelia-router", "bootstrap", "aurelia-event-aggregator"], function (_export) {
  var Router, bootstrap, EventAggregator, _prototypeProperties, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "demo"], moduleId: "./demo", nav: true, title: "Demo" }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsRUFDUixlQUFlLHlDQUVWLEdBQUc7Ozs7QUFKUixZQUFNLGtCQUFOLE1BQU07O0FBQ1AsZUFBUzs7QUFDUixxQkFBZSwyQkFBZixlQUFlOzs7Ozs7Ozs7QUFFVixTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU07Z0NBRlAsR0FBRzs7QUFHWixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM5QixrQkFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDekIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxNQUFNLENBQUMsRUFBRyxRQUFRLEVBQUUsUUFBUSxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBRSxDQUMxRSxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7NkJBVlUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFEekIsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==