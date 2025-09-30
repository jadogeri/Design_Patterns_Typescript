import { DHL } from "./DHL";
import { InventoryService } from "./InventoryService";
import { MonarchInventoryService } from "./MonarchInventoryService";
import { OrderFacade } from "./OrderFacade";
import { PaymentService } from "./PaymentService";
import { ShippingService } from "./ShippingService";
import { VisaCard } from "./VisaCard";

class FacadeRunner {
    public  main() {

        const inventory: InventoryService  = new MonarchInventoryService();
        const shipping: ShippingService  = new DHL();
        const payment: PaymentService = new VisaCard();

        const orderFacade: OrderFacade = new OrderFacade(inventory, shipping, payment);
        orderFacade.placeOrder("Laptop", 1, "123 Main St", 1200.00);
    }
}

const facadeRunner = new FacadeRunner();
facadeRunner.main();