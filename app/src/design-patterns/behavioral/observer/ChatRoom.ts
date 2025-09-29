import { Message } from "./Message";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class ChatRoom implements Subject {
    private observers: Array<Observer> ;

    constructor(){
        this.observers = new Array<Observer>();
    }

    public registerObserver( o: Observer): void {
        this.observers.push(o);
        const message: string = Message.REGISTERED;
        this.sendMessage(o, message);
    }

    public removeObserver(o: Observer): void {

        const message =(Message.LOGGED_OUT);
        this.sendMessage(o, message);
        //filter list and removed logged out user
        this.observers = this.observers.filter((obj: Observer)=>{
            return obj != o;
        });

    }

    public notifyObservers(sender: Observer, message: string) : void{

        this.observers.forEach((observer: Observer)=>{
            if(sender != observer || !this.observers.includes(sender)) {
                observer.update(" received: <" + sender.getUsername() + "> " + message);
            }else{
                sender.update(" sent: " + message);
            }
        });

    }


    public sendMessage(sender: Observer, messageContent: string): void {

        this.notifyObservers(sender, messageContent);
    }
}
