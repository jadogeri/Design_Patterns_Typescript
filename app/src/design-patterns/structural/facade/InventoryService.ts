
export interface InventoryService {
    checkStock(item: string, quantity: number): void;
}
