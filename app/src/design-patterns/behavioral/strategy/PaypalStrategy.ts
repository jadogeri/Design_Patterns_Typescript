import { PaymentStrategy } from "./PaymentStrategy";
import { InsufficientFundsException } from "./InsufficientFundsException";

export class PaypalStrategy implements PaymentStrategy {
    private email: string;
    private password: string;
    private amount: number;

    constructor(email: string, password: string, amount: number) {
        this.email = email;
        this.password = password;
        this.amount = amount;
    }

    public getEmail(): string {
        return this.email;
    }

    public getAmount(): number {
        return this.amount;
    }
    public setAmount(amount: number) {
        this.amount = amount;
    }

    public pay(amount: number): void{
        console.log("Processing Paypal payment of " + amount + " from user with email " + this.getEmail() + " .....");

        if(amount < 0){
            throw new Error("Amount cannot be negative");
        }
        if(this.getAmount() - amount < -2000){
            throw new InsufficientFundsException("Insufficient funds for withdrawal.");
        }
        console.log("new total " + (this.getAmount() - amount));

        this.setAmount(this.getAmount() - amount);

    }

    public addFunds(amount: number): void {
        console.log("Processing PayPal adding funds of " + amount + " for user with email " + this.getEmail());
        if (amount < 0.0) {
            throw new Error("Balance cannot be negative.");
        }
        console.log("new total " + (this.getAmount() + amount));

        this.setAmount(this.getAmount() + amount);
    }
}