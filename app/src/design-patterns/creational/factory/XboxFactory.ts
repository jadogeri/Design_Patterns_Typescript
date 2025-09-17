import { Game } from "./Game";
import { GameFactory } from "./GameFactory";
import { Xbox } from "./Xbox";


export class XboxFactory implements GameFactory {


    createGame = () : Game  => {

        return new Xbox();
    }
}
