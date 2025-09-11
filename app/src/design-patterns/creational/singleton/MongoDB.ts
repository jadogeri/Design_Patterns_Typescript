import { DatabaseClient } from "./DatabaseClient";

export class MongoDB implements DatabaseClient {

    connect() {

        return "Connecting to MongoDB";
    }
}
