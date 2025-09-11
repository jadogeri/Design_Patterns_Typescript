import { DatabaseClient } from "./DatabaseClient";

export class Oracle implements DatabaseClient {

    connect() {

        return "Connecting to Oracle";
    }
}
