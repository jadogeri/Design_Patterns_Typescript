import { Game } from "./Game";
import { GameFactory } from "./GameFactory";
import { PlayStation } from "./PlayStation";


export class PlayStationFactory implements GameFactory {


    createGame = () : Game  => {

        return new PlayStation();
    }
}
