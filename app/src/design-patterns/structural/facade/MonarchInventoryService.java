package structural.facade;

public class MonarchInventoryService implements InventoryService {
    @Override
    public void checkStock(String item, int quantity) {
        System.out.println("Monarch services checking stock for " + item + ": " + quantity);
    }
}
