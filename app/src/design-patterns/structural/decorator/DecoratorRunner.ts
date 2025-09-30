import { Burger } from "./Burger";
import { CheeseDecorator } from "./CheeseDecorator";
import { MayoDecorator } from "./MayoDecorator";
import { OnionDecorator } from "./OnionDecorator";
import { PickleDecorator } from "./PickleDecorator";
import { RegularBurger } from "./RegularBurger";



export class DecoratorRunner {
    public main() {

        let burger : Burger= new RegularBurger();
        console.log(burger.getDescription() + " $" + burger.cost());

        burger = new CheeseDecorator(burger);
        console.log(burger.getDescription() + " $" + burger.cost());

        burger = new OnionDecorator(burger);
        console.log(burger.getDescription() + " $" + burger.cost());

        burger = new PickleDecorator(burger);
        console.log(burger.getDescription() + " $" + burger.cost());

        burger = new MayoDecorator(burger);
        console.log(burger.getDescription() + " $" + burger.cost());

    }
}

const decoratorRunner = new DecoratorRunner();
decoratorRunner.main();