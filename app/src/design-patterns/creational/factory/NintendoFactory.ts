import { Game } from "./Game";
import { GameFactory } from "./GameFactory";
import { Nintendo } from "./Nintendo";


export class NintendoFactory implements GameFactory {


    createGame = () : Game  => {

        return new Nintendo();
    }
}
