
export class USPS implements ShippingService {
    public arrangeShipping(item: string,address: string): void {
        console.log("USPS arranging shipping for " + item + " to " + address);
    }
}
