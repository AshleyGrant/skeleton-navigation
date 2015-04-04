System.register([], function (_export) {
  var _classCallCheck, SVG;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SVG = _export("SVG", function SVG() {
        var _this = this;

        _classCallCheck(this, SVG);

        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 50;
        this.y2 = 0;
        this.width = 40;
        this.style = "stroke:rgb(0,0,0);stroke-width:${width}";

        setInterval(function () {
          if (_this.x1 < 250) {
            _this.x1++;
            _this.x2++;
          } else {
            _this.x1 = 0;
            _this.x2 = 50;
          }
        }, 33);
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3VCQUFhLEdBQUc7Ozs7Ozs7OztBQUFILFNBQUcsa0JBQ0gsU0FEQSxHQUFHOzs7OEJBQUgsR0FBRzs7QUFFWixZQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNaLFlBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osWUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDYixZQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNaLFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxLQUFLLEdBQUcseUNBQXlDLENBQUM7O0FBRXZELG1CQUFXLENBQUMsWUFBTTtBQUNoQixjQUFHLE1BQUssRUFBRSxHQUFHLEdBQUcsRUFBRTtBQUNoQixrQkFBSyxFQUFFLEVBQUUsQ0FBQztBQUNWLGtCQUFLLEVBQUUsRUFBRSxDQUFDO1dBQ1gsTUFDSTtBQUNILGtCQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixrQkFBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO1dBQ2Q7U0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQ1IiLCJmaWxlIjoic3ZnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=