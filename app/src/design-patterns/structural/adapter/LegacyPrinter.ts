import { LegacyPrintable } from "./LegacyPrintable";

export class LegacyPrinter implements LegacyPrintable {

    printDocument(text: string): void {

        console.log("Legacy Printer: " + text);

    }
}
