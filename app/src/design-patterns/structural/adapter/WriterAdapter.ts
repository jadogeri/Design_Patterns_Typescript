import { LegacyWriter } from "./LegacyPrintable";
import { Writer } from "./Writer";

export class WriterAdapter implements Writer{

    private legacyWriter : LegacyWriter;

    constructor(legacyWriter: LegacyWriter){
        
        this.legacyWriter = legacyWriter;
    }

    write(): void {
        
        this.legacyWriter.writeDocument();
    }

    
}