package creational.builder;

public class BuilderRunner
{
    public static void main(String[] args)
    {
        System.out.println("Pizza Builder");
        // Creating a pizza with mandatory and some optional toppings
        Pizza deluxePizza = new Pizza.PizzaBuilder("thin crust", "tomato", "mozzarella")
                .addPepperoni()
                .addMushrooms()
                .build();

        // Creating a simple cheese pizza
        Pizza cheesePizza = new Pizza.PizzaBuilder("thick crust", "marinara", "cheddar")
                .build();

        System.out.println("Deluxe Pizza Builder : \n" +
                "cheese: " + deluxePizza.getCheese() + " \n" +
                "mushrooms: " + deluxePizza.getMushrooms() + " \n");

    }
}


console.log("testing runner builder")