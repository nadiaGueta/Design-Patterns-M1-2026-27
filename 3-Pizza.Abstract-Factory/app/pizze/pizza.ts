import {
  ThinCrustDough,
  MarinaraSauce,
  ReggianoCheese,
} from "@/ingredients/ingredients";
import { PizzaIngredientFactory } from "@/PizzaIngredientFactory";

export abstract class Pizza {
  
  protected name!: string;
 getName(): string {
    return this.name;
  }

  setName(name: string): void {
  this.name = name;
}
  abstract prepare(): void;

  bake(): void {
    console.log("Bake for 25 minutes at 350");
  }

  cut(): void {
    console.log("Cutting the pizza into diagonal slices");
  }

  box(): void {
    console.log("Place pizza in official PizzaStore box");
  }
}

export class CheesePizza extends Pizza {

    constructor(
    private ingredientFactory: PizzaIngredientFactory
  ) {
    super();
    this.name = "Cheese Pizza";
  }
  prepare(): void {
    console.log(`Preparing ${this.name}`);

    const dough = this.ingredientFactory.createDough(); // ❌ dépendance concrète
    const sauce = this.ingredientFactory.createSauce()
    const cheese = this.ingredientFactory.createCheese()
  }
}
export class VeggiePizza extends Pizza {

    constructor(
    private ingredientFactory: PizzaIngredientFactory
  ) {
    super();
    this.name = "Veggie Pizza";
  }
  prepare(): void {
    console.log(`Preparing ${this.name}`);

    const dough = this.ingredientFactory.createDough(); 
    const sauce = this.ingredientFactory.createSauce()
    const cheese = this.ingredientFactory.createCheese()
  }


}
  export class PepperoniPizza extends Pizza {

    constructor(
    private ingredientFactory: PizzaIngredientFactory
  ) {
    super();
    this.name = "Pepperoni Pizza";
  }
  prepare(): void {
    console.log(`Preparing ${this.name}`);

    const dough = this.ingredientFactory.createDough(); 
    const sauce = this.ingredientFactory.createSauce()
    const cheese = this.ingredientFactory.createCheese()
  }
}
