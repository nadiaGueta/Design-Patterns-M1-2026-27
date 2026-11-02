import { Duck } from "./Duck";
import { FlyNoWay } from "./FlyNoWay";

export class ModelDuck extends Duck{

constructor() {
    super(new FlyNoWay());
  }

  display(): string {
      return "I'm a model duck!";
  }  
}