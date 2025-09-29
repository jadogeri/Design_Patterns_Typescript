import { PaymentStrategy } from "./PaymentStrategy";

export class ShoppingCart {
    private paymentStrategy: PaymentStrategy | null = null;

    public setPaymentStrategy(paymentStrategy: PaymentStrategy ): void {
        this.paymentStrategy = paymentStrategy;
    }

    public checkout(amount: number): void {
        if (this.paymentStrategy == null) {
            console.log("No payment strategy selected.");
            return;
        }
        this.paymentStrategy.pay(amount);
    }

    public increaseFunds(amount: number): void {
        if (this.paymentStrategy == null) {
            console.log("No payment strategy selected.");
            return;
        }
        this.paymentStrategy.addFunds(amount);
    }
}