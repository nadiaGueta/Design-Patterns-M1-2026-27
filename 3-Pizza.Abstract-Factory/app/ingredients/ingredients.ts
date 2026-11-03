export interface Dough {
  name: string;
}

export interface Sauce {
  name: string;
}

export interface Cheese {
  name: string;
}

export class ThinCrustDough implements Dough {
  name = "Thin Crust Dough";
}

export class ThickCrustDough implements Dough {
  name = "Thick Crust Dough";
}
export class MarinaraSauce implements  Sauce{
    name= "MarinaraSauce" ;
}
export class ReggianoCheese  implements  Cheese{
    name= "ReggianoCheese";
}

export class PlumTomatoSauce implements Sauce {
  name = "Plum Tomato Sauce";
}

export class MozzarellaCheese implements Cheese {
  name = "Mozzarella Cheese";
}
