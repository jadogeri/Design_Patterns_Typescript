console.log("testing runner factory");
import { Connection } from "./Connection";
import { MongoDB } from "./MongoDB";
import { MySql } from "./MySql";
import { Oracle } from "./Oracle";
import { PostgresSql } from "./PostgresSql";

export class SingletonRunner {

    public main() {

        const mysql = new MySql();
        const oracle = new Oracle();
        const postgresql = new PostgresSql();
        const mongodb = new MongoDB();

        //create connection instance
        const database1 = Connection.getInstance();
        
        console.log(database1);
        const database2 = Connection.getInstance();
        console.log(database2);


        database1.registerDatabase(mysql);
        console.log(database1);
        console.log(database2);
        console.log(database1.connectDatabase());
        database2.registerDatabase(postgresql);
        console.log(database1);
        console.log(database2);
        console.log(database1.connectDatabase());
        database1.registerDatabase(oracle);
        console.log(database1);
        console.log(database2);
        console.log(database1.connectDatabase());
        database2.registerDatabase(mongodb);
        console.log(database1);
        console.log(database2);
        console.log(database1.connectDatabase());
        console.log(database2.connectDatabase());

        //console.log(mongoooseDB.);
    }
}

const singletonRunner = new SingletonRunner();
singletonRunner.main();