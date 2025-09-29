package structural.adapter;

public class LegacyPrinter implements LegacyPrintable {

    @Override
    public void printDocument(String text) {

        System.out.println("Legacy Printer: " + text);

    }
}
