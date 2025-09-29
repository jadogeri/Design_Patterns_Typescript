
export class Card {
    private name: string;
    private cardNumber: string;
    private cvv: string;
    private expiryDate: string;
    private amount: number;

    constructor(name: string,cardNumber: string,cvv: string,expiryDate: string,amount: number) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
        this.amount = amount;
    }

    public getName() {
        return this.name;
    }
    public getCardNumber(): string {
        return this.cardNumber;
    }
    public getCvv(): string {
        return this.cvv;
    }
    public getExpiryDate(): string {
        return this.expiryDate;
    }
    public getAmount(): number {
        return this.amount;
    }
    public setAmount(amount: number): void {
        this.amount = amount;
    }

}
