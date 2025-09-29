
export namespace Pizza{
    class Pizza {
    private dough: string;
    private sauce: string;
    private cheese: string;
    private pepperoni: boolean;
    private mushrooms: boolean;
    private onions: boolean;

    // Private constructor to enforce creation through the Builder
    constructor(builder: Pizza.PizzaBuilder) {
        this.dough = builder.getDough();
        this.sauce = builder.getSauce();
        this.cheese = builder.getCheese();
        this.pepperoni = builder.getPepperoni();
        this.mushrooms = builder.getMushrooms();
        this.onions = builder.getOnions();
    }

    public getDough(): string {
        return this.dough;
    }

    public getSauce(): string {
        return this.sauce;
    }

    public getCheese(): string {
        return this.cheese;
    }

    public getPepperoni(): boolean {
        return this.pepperoni;
    }

    public getMushrooms(): boolean {
        return this.mushrooms;
    }

    public getOnions(): boolean {
        return this.onions;
    }
     
}
    export class PizzaBuilder{
        private dough: string;
        private sauce: string;
        private cheese: string;
        private pepperoni: boolean = false; // Optional, with default;
        private mushrooms: boolean = false; // Optional, with default;
        private onions: boolean = false; // Optional, with default;

        public getDough(): string {
            return this.dough;
        }

        public getSauce(): string {
            return this.sauce;
        }

        public getCheese(): string {
            return this.cheese;
        }

        public getPepperoni(): boolean {
            return this.pepperoni;
        }

        public getMushrooms(): boolean {
            return this.mushrooms;
        }

        public getOnions(): boolean {
            return this.onions;
        }


        // Constructor for mandatory parameters
        constructor(dough: string, sauce: string, cheese: string) {
            this.dough = dough;
            this.sauce = sauce;
            this.cheese = cheese;
        }

        // Methods for setting optional parameters, returning the builder for chaining
        public addPepperoni(): PizzaBuilder{
            this.pepperoni = true;
            return this;
        }

        public addMushrooms(): PizzaBuilder {
            this.mushrooms = true;
            return this;
        }

        public addOnions(): PizzaBuilder {
            this.onions = true;
            return this;
        }

        // Build method to create the final Pizza object
        public build(): Pizza {
            return new Pizza(this);
        }
    }
}