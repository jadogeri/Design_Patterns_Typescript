import { Burger } from "./Burger";
import { BurgerDecorator } from "./BurgerDecorator";

export class PickleDecorator extends BurgerDecorator {

    constructor(decoratedBurger: Burger ) {

        super(decoratedBurger);
    }

    public getDescription(): string {

        return this.decoratedBurger.getDescription() + ", pickle";
    }

    public cost(): number {

        return this.decoratedBurger.cost() + 2.0; // Cost of cheese topping
    }
}