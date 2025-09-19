import { Command } from "./Command";
import { Radio } from "./Radio";

// Concrete command for adjusting the volume of a stereo
export class AdjustVolumeCommand implements Command {
    private radio: Radio;

    constructor(radio: Radio) {
        this.radio = radio;
    }

    execute(): void {
        
        this.radio.adjustVolume();
    }
}