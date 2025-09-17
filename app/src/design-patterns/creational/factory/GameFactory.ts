import { Game } from "./Game";

export interface GameFactory{
    createGame(): Game
}