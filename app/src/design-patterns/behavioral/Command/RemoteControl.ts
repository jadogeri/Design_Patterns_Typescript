import { Command } from "./Command";

export class RemoteControl {
    private command: Command | null= null;

    constructor() {
    }

    setCommand(command: Command ) {
        this.command = command;
    }

    pressButton(): void {
        if(this.command === null){

            throw new NullCommandError("No Command Object available.");

        }else{
            this.command.execute();
        }
    }
}

class NullCommandError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomValidationError";
  }
}
