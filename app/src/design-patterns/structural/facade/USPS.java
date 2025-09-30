package structural.facade;

public class USPS implements ShippingService {
    @Override
    public void arrangeShipping(String item, String address) {
        System.out.println("USPS arranging shipping for " + item + " to " + address);
    }
}
