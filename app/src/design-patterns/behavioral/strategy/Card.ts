package behavioral.strategy;

public class Card {
    private String name;
    private String cardNumber;
    private String cvv;
    private String expiryDate;
    private double amount;

    public Card(String name, String cardNumber, String cvv, String expiryDate, double amount) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
        this.amount = amount;
    }

    public String getName() {
        return name;
    }
    public String getCardNumber() {
        return cardNumber;
    }
    public String getCvv() {
        return cvv;
    }
    public String getExpiryDate() {
        return expiryDate;
    }
    public double getAmount() {
        return amount;
    }
    public void setAmount(double amount) {
        this.amount = amount;
    }

}
