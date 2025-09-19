import { Command } from "./Command";
import { Device } from "./Device";

// Concrete command for turning a device off
export class TurnOnCommand implements Command {
    private device: Device ;

    constructor(device: Device ) {
        this.device = device;
    }

    execute() {
        this.device.turnOn();
    }
}