import { DatabaseClient } from "./DatabaseClient";

export class PostgresSql implements DatabaseClient {

    connect() {

        return "Connecting to PostgresSql";
    }
}
