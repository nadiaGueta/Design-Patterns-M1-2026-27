import type {
  Dough,
  Sauce,
  Cheese,
} from "./ingredients/ingredients";

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
}