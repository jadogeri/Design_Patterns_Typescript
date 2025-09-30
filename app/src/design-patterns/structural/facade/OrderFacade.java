package structural.facade;

public class OrderFacade {
    private final InventoryService inventoryService;
    private final ShippingService shippingService;
    private final PaymentService paymentService;

    // Constructor Injection
    public OrderFacade(InventoryService inventoryService, ShippingService shippingService, PaymentService paymentService) {
        this.inventoryService = inventoryService;
        this.shippingService = shippingService;
        this.paymentService = paymentService;
    }

    public void placeOrder(String item, int quantity, String address, double amount) {
        inventoryService.checkStock(item, quantity);
        paymentService.processPayment(amount);
        shippingService.arrangeShipping(item, address);
        System.out.println("Order placed successfully for " + item);
    }
}