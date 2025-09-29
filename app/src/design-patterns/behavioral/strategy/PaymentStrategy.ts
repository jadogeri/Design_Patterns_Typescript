package behavioral.strategy;


public interface PaymentStrategy {
    void pay(double amount) throws InsufficientFundsException;
    void addFunds(double amount);
}