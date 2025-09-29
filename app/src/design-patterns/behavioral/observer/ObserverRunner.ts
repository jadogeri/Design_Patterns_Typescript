import { ChatRoom } from "./ChatRoom";
import { User } from "./User";



export class ObserverRunner {

    public main() {
        const chatRoom = new ChatRoom();
        const user1 = new User("John");
        const user2 = new User("Jane");
        const user3 = new User("Daniel");
        const user4 = new User("Jack");


        chatRoom.registerObserver(user1);
        chatRoom.registerObserver(user2);
        chatRoom.registerObserver(user3);
        chatRoom.registerObserver(user4);
        chatRoom.sendMessage(user1,"my first message");
        chatRoom.removeObserver(user3);




    }
}
console.log("testing runner observer");
const observerRunner = new ObserverRunner();
observerRunner.main();



 