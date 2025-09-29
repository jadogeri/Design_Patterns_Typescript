import { LegacyPrintable } from "./LegacyPrintable";
import { ModernPrintable } from "./ModernPrintable";

export class PrinterAdapter implements ModernPrintable {

    public legacyPrintable: LegacyPrintable  ;

    constructor(legacyPrintable: LegacyPrintable ) {

        this.legacyPrintable = legacyPrintable;
    }


    public print(content: string): void {
        // Translate the new interface method call to the old interface method call
        this.legacyPrintable.printDocument(content);
    }

    public printPage(pageContent: string): void {
        // For simplicity, we can also just call the old method here.
        // In a real scenario, more complex logic might be needed to adapt.
        this.legacyPrintable.printDocument("Page: " + pageContent);
    }
}
