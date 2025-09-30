import { Burger } from "./Burger";
import { BurgerDecorator } from "./BurgerDecorator";

export class CheeseDecorator extends BurgerDecorator {

   constructor(decoratedBurger: Burger ) {
        super(decoratedBurger);
    }

    public getDescription(): string {
        return this.decoratedBurger.getDescription() + ", cheese";
    }

    public cost(): number {
        return this.decoratedBurger.cost() + 1.5; // Cost of cheese topping
    }
}