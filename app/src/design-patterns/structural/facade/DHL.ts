
public class DHL implements ShippingService {
    @Override
    public void arrangeShipping(String item, String address) {
        System.out.println("DHL arranging shipping for " + item + " to " + address);
    }
}
