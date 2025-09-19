import { Device } from "./Device";

export class Radio implements Device{

    turnOn(): void {
        console.log("Light turned on");
    }

    turnOff(): void {
        console.log("Light turned off");
    }


    adjustVolume(): void {

        console.log("Adjusting radio volume");
    }
}
