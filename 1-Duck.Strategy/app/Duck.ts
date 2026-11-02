import { FlyBehavior } from "./FlyBehavior";

export class Duck {


  private flyBehavior : FlyBehavior ; 

  constructor(flyBehavior:FlyBehavior ){

    this.flyBehavior = flyBehavior ; 
  }

// . Changer la stratégie

setFlyBehavior  (flyBehavior:FlyBehavior): void {
this.flyBehavior= flyBehavior ;

}
performFly(): string {

  return this.flyBehavior.fly() ; 



}
  quack() {
    return "Quack!";
  }

  swim() {
    return "Swimming!";
  }

 display(): string {
  return "I'm a duck!";
}
}
