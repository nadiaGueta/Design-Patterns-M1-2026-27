import { ChicagoPizzaIngredientFactory } from "./ChicagoPizzaIngredientFactory";
import { NYPizzaIngredientFactory } from "./NYPizzaIngredientFactory";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { CheesePizza, PepperoniPizza, Pizza, VeggiePizza } from "./pizze/pizza";

export abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
  
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {

private factory: PizzaIngredientFactory = new NYPizzaIngredientFactory();
  
  protected createPizza(type: string): Pizza {
    if (type === "cheese") {
     const pizza = new CheesePizza(this.factory);
      pizza.setName("New York Cheese Pizza");
      return pizza ; 
    }

    if(type==="Pepperoni"){

    const pepperoniPizza = new PepperoniPizza(this.factory) ;
    pepperoniPizza.setName("New York Pepperoni Pizza");
return pepperoniPizza ;  
    }
    throw new Error("Unknown pizza type");
  }
}

export class ChicagoPizzaStoreFactory extends PizzaStore{

  private factory: PizzaIngredientFactory = new ChicagoPizzaIngredientFactory
  protected createPizza(type: string): Pizza {

    if (type ==="veggie"){

      const pizzaChicago = new VeggiePizza(this.factory) ;
      pizzaChicago.setName('pizza Chicago veggie' ) ;
return pizzaChicago;

    }

    if(type=="cheese"){

      return new CheesePizza(this.factory) ;
    }
    throw new Error("Method not implemented.");
  }

  
}



