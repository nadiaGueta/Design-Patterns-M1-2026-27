import {
  ThinCrustDough,
  MarinaraSauce,
  ReggianoCheese,
} from "./ingredients/ingredients";

import type { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): ThinCrustDough {
    return new ThinCrustDough();
  }

  createSauce(): MarinaraSauce {
    return new MarinaraSauce();
  }

  createCheese(): ReggianoCheese {
    return new ReggianoCheese();
  }
}