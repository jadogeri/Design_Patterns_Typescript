package creational.builder;
public class Pizza {
    private String dough;
    private String sauce;
    private String cheese;
    private boolean pepperoni;
    private boolean mushrooms;
    private boolean onions;

    // Private constructor to enforce creation through the Builder
    private Pizza(PizzaBuilder builder) {
        this.dough = builder.dough;
        this.sauce = builder.sauce;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.mushrooms = builder.mushrooms;
        this.onions = builder.onions;
    }

    public String getDough() {
        return dough;
    }

    public String getSauce() {
        return sauce;
    }

    public String getCheese() {
        return cheese;
    }

    public boolean getPepperoni() {
        return pepperoni;
    }

    public boolean getMushrooms() {
        return mushrooms;
    }

    public boolean getOnions() {
        return onions;
    }

    public static class PizzaBuilder {
        private String dough;
        private String sauce;
        private String cheese;
        private boolean pepperoni = false; // Optional, with default
        private boolean mushrooms = false; // Optional, with default
        private boolean onions = false;   // Optional, with default

        // Constructor for mandatory parameters
        public PizzaBuilder(String dough, String sauce, String cheese) {
            this.dough = dough;
            this.sauce = sauce;
            this.cheese = cheese;
        }

        // Methods for setting optional parameters, returning the builder for chaining
        public PizzaBuilder addPepperoni() {
            this.pepperoni = true;
            return this;
        }

        public PizzaBuilder addMushrooms() {
            this.mushrooms = true;
            return this;
        }

        public PizzaBuilder addOnions() {
            this.onions = true;
            return this;
        }

        // Build method to create the final Pizza object
        public Pizza build() {
            return new Pizza(this);
        }
    }
}
