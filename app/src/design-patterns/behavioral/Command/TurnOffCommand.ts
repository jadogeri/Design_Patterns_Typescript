import { Command } from "./Command";
import { Device } from "./Device";

// Concrete command for turning a device off
export class TurnOffCommand implements Command {
    private device: Device ;

    constructor(device: Device ) {
        this.device = device;
    }

    execute() {
        this.device.turnOff();
    }
}