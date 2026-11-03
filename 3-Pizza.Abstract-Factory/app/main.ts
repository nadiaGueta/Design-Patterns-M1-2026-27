import {NYPizzaStore,
  ChicagoPizzaStoreFactory,
 // NapoliPizzaStoreFactory,
} from "./pizza.store";

function main() {
  const myStore = new NYPizzaStore();
 const chicagoStore = new ChicagoPizzaStoreFactory();

  const pizza1 = myStore.orderPizza("cheese");

  console.log(`$$$$$$$$Ordered a ${pizza1.getName()}\n`);
  const pizza3 = myStore.orderPizza("Pepperoni");
  
  
  console.log(`$$$$$$$$$$$$Ordered a ${pizza3.getName()}\n`);
 const pizza2 = chicagoStore.orderPizza("veggie");
 
console.log(`$$$$$$$$$$$$$$$$Ordered a  ${pizza2.getName()}\n`);
}
main();
