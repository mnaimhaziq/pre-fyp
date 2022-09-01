import { Coach } from "./coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();



//Dclare an array of Shape ... initially Empty
let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);


for ( let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
    console.log();
}


