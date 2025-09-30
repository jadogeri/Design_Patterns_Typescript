package structural.facade;

public class ApplePay implements PaymentService {
    @Override
    public void processPayment(double amount) {

        System.out.println("Apple Pay processing payment of " + amount);
    }
}