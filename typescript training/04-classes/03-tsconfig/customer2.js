"use strict";
var Customer2 = /** @class */ (function () {
    function Customer2(firstName, Lastname) {
        this._firstName = firstName;
        this._lastName = Lastname;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
//lets create an instance
var yourCustomer = new Customer2("Amar", "Imran");
yourCustomer.firstName = "Susan";
console.log(yourCustomer.firstName);
