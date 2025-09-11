import { DatabaseClient } from "./DatabaseClient";

export class Connection {

    private static database: Connection | null ;
    private client: DatabaseClient | null;

    private constructor() {
        this.client = null
    }

    static getInstance():  Connection  {
        if (!Connection.database) {
           this.database = new Connection();
        }
        return this.database as Connection;
    }

    public registerDatabase(databaseClient: DatabaseClient ) {
        this.client = databaseClient;
    }

    public connectDatabase() : String  {
        if (this.client == null) {
            this.client = new MemoryDatabase();
        }
        return this.client.connect();
    }

}


class MemoryDatabase implements DatabaseClient {

    public connect() {
        return "Memory Database";
    }
}
