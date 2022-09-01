class Customer {

    firstName: string;
    LastName: string;

    

 
    
    constructor(firstName : string , Lastname : string){
        this.firstName = firstName;
        this.LastName = Lastname;
    }
   
   
}

//lets create an instance

let myCustomer = new Customer("Amar", "Imran");


// Without constructor
// myCustomer.firstName = "Martin";
// myCustomer.LastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.LastName);
