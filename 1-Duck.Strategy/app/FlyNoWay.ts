import { FlyBehavior } from "./FlyBehavior";


export class FlyNoWay implements FlyBehavior {
  fly(): string {
    return "Je ne peux pas voler";
  }
}