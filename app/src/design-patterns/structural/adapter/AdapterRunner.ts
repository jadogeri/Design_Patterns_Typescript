import { LegacyPrinter } from "./LegacyPrinter";
import { PrinterAdapter } from "./PrinterAdapter";

class AdapterRunner {

    public main() {


        // Using the old printer directly (legacy client)
        const legacyClientPrinter : LegacyPrinter = new LegacyPrinter();
        legacyClientPrinter.printDocument("Printing from legacy client.");

        // Using the new printer interface with the adapter (modern client)
        const legacyPrinterInstance : LegacyPrinter = new LegacyPrinter();
        const modernClientPrinter : PrinterAdapter = new PrinterAdapter(legacyPrinterInstance);

        modernClientPrinter.print("Printing from modern client using adapter.");
        modernClientPrinter.printPage("Printing page 1 using adapter.");
    }
}

const adapterRunner = new AdapterRunner();
adapterRunner.main();
console.log("testing runner adapter");