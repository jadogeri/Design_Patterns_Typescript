import { PaymentService } from "./PaymentService";

export  class ApplePay implements PaymentService {
    public processPayment(amount: number) {

        console.log("Apple Pay processing payment of " + amount);
    }
}