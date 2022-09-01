let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// Tradditional FOR loop 
for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}

// Simplified FOR loop 
for (let tempSport of sportsOne){
    if(tempSport == "Cricket")
    console.log(tempSport + "<< My Favourite");
    else{
        console.log(tempSport);
    }


}