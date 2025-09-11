import { DatabaseClient } from "./DatabaseClient";

export class MySql implements DatabaseClient {

    connect() {

        return "Connecting to MySql";
    }
}
