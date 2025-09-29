import { LegacyWriter } from "./LegacyPrintable";
import { WriterAdapter } from "./WriterAdapter";

export class AdapterRunner {

    public main() {

        const legacyWriter = new LegacyWriter();
        const writerAdapter = new WriterAdapter(legacyWriter);
        writerAdapter.write();


    }
}

const adapterRunner = new AdapterRunner();
adapterRunner.main();
console.log("testing runner adapter");