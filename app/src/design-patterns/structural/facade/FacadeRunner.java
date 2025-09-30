package structural.facade;

public class FacadeRunner {
    public static void main(String[] args) {

        InventoryService inventory = new MonarchInventoryService();
        ShippingService shipping = new DHL();
        PaymentService payment = new VisaCard();

        OrderFacade orderFacade = new OrderFacade(inventory, shipping, payment);
        orderFacade.placeOrder("Laptop", 1, "123 Main St", 1200.00);
    }
}
