import { Burger } from "./Burger";

export abstract class BurgerDecorator implements Burger {
    protected decoratedBurger: Burger ;

    constructor(decoratedBurger: Burger) {
        this.decoratedBurger = decoratedBurger;
    }

    public getDescription(): string {
        return this.decoratedBurger.getDescription();
    }

    public cost(): number {
        return this.decoratedBurger.cost();
    }
}


//console.log("testing runner decorator");