import { PaymentService } from "./PaymentService";

export class VisaCard implements PaymentService {
    public processPayment(amount: number) {
        console.log("Visa card processing payment of " + amount);
    }
}