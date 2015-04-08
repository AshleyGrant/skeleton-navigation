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

        var goForward = true;

        setInterval(function () {
          if (goForward === true) {
            if (_this.x1 < 250) {
              _this.x1++;
              _this.x2++;
            } else {
              goForward = false;
            }
          } else {
            if (_this.x1 > 0) {
              _this.x1--;
              _this.x2--;
            } else {
              goForward = true;
            }
          }
        }, 0);
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3VCQUFhLEdBQUc7Ozs7Ozs7OztBQUFILFNBQUcsa0JBQ0gsU0FEQSxHQUFHLEdBQ0Q7Ozs4QkFERixHQUFHOztBQUVaLFlBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osWUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixZQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNiLFlBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsWUFBSSxDQUFDLEtBQUssR0FBRyx5Q0FBeUMsQ0FBQzs7QUFFdkQsWUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDOztBQUVyQixtQkFBVyxDQUFDLFlBQU07QUFDaEIsY0FBRyxTQUFTLEtBQUssSUFBSSxFQUFFO0FBQ3JCLGdCQUFHLE1BQUssRUFBRSxHQUFHLEdBQUcsRUFBRTtBQUNoQixvQkFBSyxFQUFFLEVBQUUsQ0FBQztBQUNWLG9CQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ1gsTUFDSTtBQUNILHVCQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO1dBQ0YsTUFDSTtBQUNILGdCQUFJLE1BQUssRUFBRSxHQUFHLENBQUMsRUFBRztBQUNoQixvQkFBSyxFQUFFLEVBQUUsQ0FBQztBQUNWLG9CQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ1gsTUFDSTtBQUNILHVCQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO1dBQ0Y7U0FDRixFQUFFLENBQUMsQ0FBQyxDQUFDO09BQ1AiLCJmaWxlIjoic3ZnLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==