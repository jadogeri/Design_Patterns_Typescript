package behavioral.strategy;

public class PaypalStrategy implements PaymentStrategy {
    private String email;
    private String password;
    private double amount;

    public PaypalStrategy(String email, String password, double amount) {
        this.email = email;
        this.password = password;
        this.amount = amount;
    }

    public String getEmail() {
        return email;
    }

    public double getAmount() {
        return amount;
    }
    public void setAmount(double amount) {
        this.amount = amount;
    }

    @Override
    public void pay(double amount) throws InsufficientFundsException {
        System.out.println("Processing Paypal payment of " + amount + " from user with email " + this.getEmail() + " .....");

        if(amount < 0){
            throw new IllegalArgumentException("Amount cannot be negative");
        }
        if(this.getAmount() - amount < -2000){
            throw new InsufficientFundsException("Insufficient funds for withdrawal.");
        }
        System.out.println("new total " + (this.getAmount() - amount));

        this.setAmount(this.getAmount() - amount);
        //System.out.println("Debit card amount is " + this.getAmount());

    }

    @Override
    public void addFunds(double amount) {
        System.out.println("Processing PayPal adding funds of " + amount + " for user with email " + this.getEmail());
        if (amount < 0.0) {
            throw new IllegalArgumentException("Balance cannot be negative.");
        }
        System.out.println("new total " + (this.getAmount() + amount));

        this.setAmount(this.getAmount() + amount);
    }
}