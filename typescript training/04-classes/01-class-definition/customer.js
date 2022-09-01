var Customer = /** @class */ (function () {
    function Customer(firstName, Lastname) {
        this.firstName = firstName;
        this.LastName = Lastname;
    }
    return Customer;
}());
//lets create an instance
var myCustomer = new Customer("Amar", "Imran");
// Without constructor
// myCustomer.firstName = "Martin";
// myCustomer.LastName = "Dixon";
console.log(myCustomer.firstName);
console.log(myCustomer.LastName);
