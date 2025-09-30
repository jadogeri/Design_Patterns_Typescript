import { InventoryService } from "./InventoryService";
import { PaymentService } from "./PaymentService";
import { ShippingService } from "./ShippingService";

export class OrderFacade {
    private inventoryService: InventoryService ;
    private shippingService: ShippingService ;
    private paymentService: PaymentService ;

    // Constructor Injection
    constructor(inventoryService: InventoryService, shippingService: ShippingService , paymentService: PaymentService ) {
        this.inventoryService = inventoryService;
        this.shippingService = shippingService;
        this.paymentService = paymentService;
    }

    public placeOrder(item: string, quantity: number, address: string, amount: number): void {
        this.inventoryService.checkStock(item, quantity);
        this.paymentService.processPayment(amount);
        this.shippingService.arrangeShipping(item, address);
        console.log("Order placed successfully for " + item);
    }
}