import { Coach } from "./coach";

export class GolfCoach implements Coach{
    
    getDailyWorkout(): string {
        return "Hit 100 balls at golf range! ";
    }
}