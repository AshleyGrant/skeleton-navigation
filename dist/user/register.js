System.register([], function (_export) {
  var _prototypeProperties, _classCallCheck, Register;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Register = _export("Register", (function () {
        function Register() {
          _classCallCheck(this, Register);

          this.heading = "User Registration!";
          this.firstName = "John";
          this.lastName = "Doe";
        }

        _prototypeProperties(Register, null, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            },
            configurable: true
          },
          welcome: {
            value: function welcome() {
              alert("Welcome, " + this.fullName + "!");
            },
            writable: true,
            configurable: true
          }
        });

        return Register;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvcmVnaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs2Q0FBYSxRQUFROzs7Ozs7Ozs7OztBQUFSLGNBQVE7QUFDUixpQkFEQSxRQUFRO2dDQUFSLFFBQVE7O0FBRWpCLGNBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7QUFDcEMsY0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7OzZCQUxVLFFBQVE7QUFPZixrQkFBUTtpQkFBQSxZQUFFO0FBQ1osMEJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO2FBQzdDOzs7QUFFRCxpQkFBTzttQkFBQSxtQkFBRTtBQUNQLG1CQUFLLGVBQWEsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO2FBQ3JDOzs7Ozs7ZUFiVSxRQUFRIiwiZmlsZSI6InVzZXIvcmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==