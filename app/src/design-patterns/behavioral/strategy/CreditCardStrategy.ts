package behavioral.strategy;

public class CreditCardStrategy extends Card implements  PaymentStrategy{

    public CreditCardStrategy(String name, String cardNumber, String cvv, String expiryDate, double amount) {
        super(name, cardNumber, cvv, expiryDate, amount);

    }
    @Override
    public void pay(double amount) throws InsufficientFundsException {
        System.out.println("Processing credit card payment of " + amount + " from card Number " + this.getCardNumber()+ " .....");

        if(amount < 0){
            throw new IllegalArgumentException("Amount cannot be negative");
        }
        if(this.getAmount() - amount < -5000.0){
            throw new InsufficientFundsException("Insufficient funds for withdrawal. Amount is less than 5000");
        }
        System.out.println("new total " + (this.getAmount() - amount));

        this.setAmount(this.getAmount() - amount);
        //System.out.println("Debit card amount is " + this.getAmount());

    }

    @Override
    public void addFunds(double amount) {

        System.out.println("Adding " + amount + " to account linked to debit card number " + this.getCardNumber());
        if (amount < 0.0) {
            throw new IllegalArgumentException("Balance cannot be negative.");
        }
        System.out.println("new total " + (this.getAmount() + amount));

        this.setAmount(this.getAmount() + amount);
    }
}
