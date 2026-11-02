import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyWithWings";

export class MallardDuck extends Duck {

   constructor() {
    super(new FlyWithWings());
  }
  display() : string {
   return "I'm a mallard duck!";
  }
}
