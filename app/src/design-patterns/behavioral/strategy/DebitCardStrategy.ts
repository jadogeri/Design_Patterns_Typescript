import { Card } from "./Card";
import { InsufficientFundsException } from "./InsufficientFundsException";
import { PaymentStrategy } from "./PaymentStrategy";

export class DebitCardStrategy extends Card implements  PaymentStrategy{

    constructor(name: string, cardNumber: string, cvv: string, expiryDate: string, amount: number) {
        super(name, cardNumber, cvv, expiryDate, amount);

    }

    public pay(amount: number) : void {
        console.log("Processing debit card payment of " + amount + " from card Number " + this.getCardNumber()+ " .....");

        if(amount < 0){
            throw new Error("Amount cannot be negative");
        }
        if(this.getAmount() - amount < 0){
            throw new InsufficientFundsException("Insufficient funds for withdrawal.");
        }
        console.log("new total " + (this.getAmount() - amount));

        this.setAmount(this.getAmount() - amount);
        //System.out.println("Debit card amount is " + this.getAmount());

    }

    public addFunds(amount: number): void {

        console.log("Processing debit card adding funds of " + amount + " to account linked to debit card number " + this.getCardNumber());
        if (amount < 0.0) {
            throw new Error("Balance cannot be negative.");
        }
        console.log("new total " + (this.getAmount() + amount));
        this.setAmount(this.getAmount() + amount);
    }
}
