class Customer2 {

    private _firstName: string;
    
    private _lastName: string;
    
    
    
  
    constructor(firstName : string , Lastname : string){
        this._firstName = firstName;
        this._lastName = Lastname;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
   
   
}

//lets create an instance

let yourCustomer = new Customer2("Amar", "Imran");

yourCustomer.firstName = "Susan";

console.log(yourCustomer.firstName);

