import { ShippingService } from "./ShippingService";

export class DHL implements ShippingService {
    public arrangeShipping(item: string, address: string): void {
        console.log("DHL arranging shipping for " + item + " to " + address);
    }
}
