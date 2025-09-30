import { InventoryService } from "./InventoryService";

export class MonarchInventoryService implements InventoryService {
    public checkStock(item: string, quantity: number): void {
        console.log("Monarch services checking stock for " + item + ": " + quantity);
    }
}
