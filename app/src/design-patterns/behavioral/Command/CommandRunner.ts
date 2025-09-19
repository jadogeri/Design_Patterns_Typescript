import { AdjustVolumeCommand } from "./AdjustVolumeCommand";
import { ChangeChannelCommand } from "./ChangeChannelCommand";
import { Light } from "./Light";
import { Radio } from "./Radio";
import { RemoteControl } from "./RemoteControl";
import { Television } from "./Television";
import { TurnOffCommand } from "./TurnOffCommand";
import { TurnOnCommand } from "./TurnOnCommand";

export class CommandRunner {

    public main() {
        // Create devices
        const tv : Television= new Television();
        const radio: Radio = new Radio();
        const light:Light = new Light();

        // Create command objects
        const turnOnTvCommand = new TurnOnCommand(tv);
        const turnOffTvCommand = new TurnOffCommand(tv);
        const turnOnRadioCommand = new TurnOnCommand(radio);
        const turnOffRadioCommand = new TurnOffCommand(radio);
        const turnOnLightCommand = new TurnOnCommand(light);
        const turnOffLightCommand = new TurnOffCommand(light);
        const adjustVolumeRadioCommand = new AdjustVolumeCommand(radio);
        const changeChannelTvCommand = new ChangeChannelCommand(tv);

        // Create remote control
        const remote = new RemoteControl();

        // Set and execute commands
        remote.setCommand(turnOnTvCommand);
        remote.pressButton();  // Outputs: TV is now on

        remote.setCommand(changeChannelTvCommand);
        remote.pressButton();  // Outputs: Channel changed

        remote.setCommand(turnOffTvCommand);
        remote.pressButton();  // Outputs: TV is now off

        remote.setCommand(turnOnRadioCommand);
        remote.pressButton();  // Outputs: Turns on Radio

        remote.setCommand(turnOffRadioCommand);
        remote.pressButton();

        remote.setCommand(turnOnLightCommand);
        remote.pressButton();

        remote.setCommand(adjustVolumeRadioCommand);
        remote.pressButton();  // Outputs: Volume adjusted

        remote.setCommand(turnOffLightCommand);
        remote.pressButton();


    }
}

const commandRunner = new CommandRunner();
commandRunner.main();

console.log("testing runner command");