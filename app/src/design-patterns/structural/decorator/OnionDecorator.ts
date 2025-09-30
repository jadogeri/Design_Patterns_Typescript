import { Burger } from "./Burger";
import { BurgerDecorator } from "./BurgerDecorator";

export class OnionDecorator extends BurgerDecorator {

    constructor(decoratedBurger: Burger ) {

        super(decoratedBurger);
    }

    public getDescription(): string {

        return this.decoratedBurger.getDescription() + ", onion";
    }

    public cost(): number{

        return this.decoratedBurger.cost() + 2.5; // Cost of cheese topping
    }
}