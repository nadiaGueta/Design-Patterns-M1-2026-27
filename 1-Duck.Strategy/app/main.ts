import { MallardDuck } from "./Mallard.duck";

function main() {
  console.log("Duck Example");

  // Create a Mallard duck
  const mallard = new MallardDuck();
  mallard.display();
  mallard.swim();
}
main();
