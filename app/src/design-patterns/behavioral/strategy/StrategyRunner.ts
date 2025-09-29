import { CreditCardStrategy } from "./CreditCardStrategy";
import { DebitCardStrategy } from "./DebitCardStrategy";
import { InsufficientFundsException } from "./InsufficientFundsException";
import { PaypalStrategy } from "./PaypalStrategy";
import { ShoppingCart } from "./ShoppingCart";

export class StrategyRunner {
    public main(){

        const cart = new ShoppingCart();

        const funds1 = 20.0;
        const fund2 = 300.0;
        const funds3 = 150.0;

        const creditCardStrategy = new CreditCardStrategy("John Doe","1234567890","123", "10-aug-2027", 5000.0);
        const debitCardStrategy = new DebitCardStrategy("Jane Doe","4444567899","425", "10-feb-2026", 5000.0);
        const paypalStrategy = new PaypalStrategy("jackdawson@gmail.com","rose-titanic",1000);


        // Pay by PayPal
        try {
            cart.setPaymentStrategy(creditCardStrategy);
            cart.checkout(funds1);
            console.log(creditCardStrategy.getAmount());

            cart.setPaymentStrategy(debitCardStrategy);
            cart.increaseFunds(funds1);
            debitCardStrategy.setAmount(funds3);
            cart.increaseFunds(funds1);
            console.log(debitCardStrategy.getAmount());
            cart.increaseFunds(funds1);
            console.log(debitCardStrategy.getAmount());
            cart.setPaymentStrategy(paypalStrategy);
            cart.checkout(funds3);
            console.log(paypalStrategy.getAmount());
        }catch(e: unknown){
            if(e instanceof InsufficientFundsException){
                console.log("Insufficient Funds" + e.message);
                console.log("Insufficient Funds");
                
            }else{
                console.log("exception: " + "Something went wrong!!");
            }
        }

    }
}
console.log("testing runner strategy");
const strategyRunner = new StrategyRunner();
strategyRunner.main();