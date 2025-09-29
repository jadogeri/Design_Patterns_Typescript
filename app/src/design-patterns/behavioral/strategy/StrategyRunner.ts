package behavioral.strategy;

public class StrategyRunner {
    public static void main(String[] args){

        ShoppingCart cart = new ShoppingCart();

        double funds1 = 20.0;
        double fund2 = 300.0;
        double funds3 = 150.0;

        CreditCardStrategy creditCardStrategy = new CreditCardStrategy("John Doe","1234567890","123", "10-aug-2027", 5000.0);
        DebitCardStrategy debitCardStrategy = new DebitCardStrategy("Jane Doe","4444567899","425", "10-feb-2026", 5000.0);
        PaypalStrategy paypalStrategy = new PaypalStrategy("jackdawson@gmail.com","rose-titanic",1000);


        // Pay by PayPal
        try {
            cart.setPaymentStrategy(creditCardStrategy);
            cart.checkout(funds1);
            System.out.println(creditCardStrategy.getAmount());

            cart.setPaymentStrategy(debitCardStrategy);
            cart.increaseFunds(funds1);
            debitCardStrategy.setAmount(funds3);
            cart.increaseFunds(funds1);
            System.out.println(debitCardStrategy.getAmount());
            cart.increaseFunds(funds1);
            System.out.println(debitCardStrategy.getAmount());
            cart.setPaymentStrategy(paypalStrategy);
            cart.checkout(funds3);
            System.out.println(paypalStrategy.getAmount());
        }catch(InsufficientFundsException e){
            System.out.println("Insufficient Funds" + e.getMessage());
            System.out.println("Insufficient Funds");

        }catch (Exception e){
            System.out.println("exception: " + e.getMessage());

        }

    }
}
console.log("testing runner strategy");