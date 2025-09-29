import { Observer } from "./Observer";
//subject interface
export interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(sender: Observer,message: string): void;

}
