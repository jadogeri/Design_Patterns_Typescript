import { Device } from "./Device";

export class Television implements Device{

    turnOn(): void {
        console.log("Light turned on");
    }

    turnOff(): void {
        console.log("Light turned off");
    }


    changeChannel(): void {

        console.log("Changing channel");
    }
}
