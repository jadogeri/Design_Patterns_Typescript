import { Observer } from "./Observer";

export class User implements Observer {
    private username: string;

    constructor(username: string) {
        this.username = username;
    }

    public getUsername(): string {
        return this.username;
    }


    public update(message: string){
        console.log(this.username + message);
    }
}
