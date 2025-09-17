import { Game } from "./Game";
import { GameFactory } from "./GameFactory";
import { NintendoFactory } from "./NintendoFactory";
import { PlayStationFactory } from "./PlayStationFactory";
import { XboxFactory } from "./XboxFactory";


export class FactoryRunner {

    public main() {

        const xboxFactory : GameFactory = new XboxFactory();
        const xbox : Game = xboxFactory.createGame();
        console.log(xbox.playingConsole());

        const playStationFactory : GameFactory = new PlayStationFactory();
        const playStation : Game = playStationFactory.createGame();
        console.log(playStation.playingConsole());

        const nintendoFactory : GameFactory = new NintendoFactory();
        const nintendo : Game = nintendoFactory.createGame();
        console.log(nintendo.playingConsole());

    }
}

console.log("testing runner factory");

const factoryRunner = new FactoryRunner();
factoryRunner.main();