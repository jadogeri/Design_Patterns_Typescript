import { Burger } from "./Burger";
import { BurgerDecorator } from "./BurgerDecorator";

export class MayoDecorator extends BurgerDecorator {

    constructor(decoratedBurger: Burger ) {

        super(decoratedBurger);
    }

    public getDescription(): string {

        return this.decoratedBurger.getDescription() + ", mayo";
    }

    public cost(): number {

        return this.decoratedBurger.cost() + 1.0; // Cost of cheese topping
    }
}