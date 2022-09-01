"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer2_1 = require("./customer2");
//lets create an instance
var yourCustomer = new customer2_1.Customer2("Amar", "Imran");
yourCustomer.firstName = "Susan";
yourCustomer.lastName = "Martin";
console.log(yourCustomer.firstName);
console.log(yourCustomer.lastName);
