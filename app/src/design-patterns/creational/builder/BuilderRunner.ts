import { Pizza } from "./Pizza";


class BuilderRunner
{
    public main()
    {
        console.log("Pizza Builder");
        // Creating a pizza with mandatory and some optional toppings
        const deluxePizza = new Pizza.PizzaBuilder("thin crust", "tomato", "mozzarella")
                .addPepperoni()
                .addMushrooms()
                .build();

        // Creating a simple cheese pizza
        const cheesePizza = new Pizza.PizzaBuilder("thick crust", "marinara", "cheddar")
                .build();

        console.log("Deluxe Pizza Builder : \n" +
                "cheese: " + deluxePizza.getCheese() + " \n" +
                "mushrooms: " + deluxePizza.getMushrooms() + " \n");

    }
}


console.log("testing runner builder")

const builderRunner = new BuilderRunner();
builderRunner.main();
