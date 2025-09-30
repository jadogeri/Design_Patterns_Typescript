import { Burger } from "./Burger";

export class RegularBurger implements Burger {

    public getDescription(): string {
        return "Regular Burger";
    }

    public cost(): number {
        return 4.25; // Base price of the Burger
    }
}
