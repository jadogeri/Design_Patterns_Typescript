package structural.facade;

public class VisaCard implements PaymentService {
    @Override
    public void processPayment(double amount) {
        System.out.println("Visa card processing payment of " + amount);
    }
}