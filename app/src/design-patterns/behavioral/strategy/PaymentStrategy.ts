

export interface PaymentStrategy {
    pay(amount: number): void;
    addFunds(amount: number): void;
}