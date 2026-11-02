import { Duck } from "./Duck"
import { FlyNoWay } from "./FlyNoWay"

export class RubberDuck extends Duck{

constructor(){

  super(new FlyNoWay())  ; 
}

display(): string {

    return "I'm a rubber duck!";
    
}
}