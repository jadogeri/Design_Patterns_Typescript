import { Command } from "./Command";
import { Television } from "./Television";

// Concrete command for adjusting the volume of a stereo
export class ChangeChannelCommand implements Command {
      private tv: Television ;

    constructor(tv: Television) {
        this.tv = tv;
    }

    execute(): void{
        this.tv.changeChannel();
    }
}