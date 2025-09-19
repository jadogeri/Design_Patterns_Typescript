import { Device } from "./Device";

export class Light implements Device{

    turnOn(): void {
        console.log("Light turned on");
    }

    turnOff(): void {
        console.log("Light turned off");
    }
}
