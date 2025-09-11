import { Connection } from "./Connection";
import { MongoDB } from "./MongoDB";
import { MySql } from "./MySql";
import { Oracle } from "./Oracle";
import { PostgresSql } from "./PostgresSql";

export class SingletonRunner {

    public static main() {

        const mysql = new MySql();
        const oracle = new Oracle();
        const postgresql = new PostgresSql();
        const mongodb = new MongoDB();

        //create connection instance
        const database = Connection.getInstance();
        console.log(database.getInstance());
        console.log(database.getInstance());
        console.log(database.getInstance());

        //if no database is provided, application uses memory
        console.log(database.connectDatabase());

        database.registerDatabase(mysql);
        console.log(database.connectDatabase());
        database.registerDatabase(postgresql);
        console.log(database.connectDatabase());
        database.registerDatabase(oracle);
        console.log(database.connectDatabase());
        database.registerDatabase(mongodb);
        console.log(database.connectDatabase());
    }
}