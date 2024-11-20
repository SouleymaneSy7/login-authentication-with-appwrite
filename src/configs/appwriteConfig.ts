import { Client, Account } from "appwrite";
import { APPWRITE_ENDPOINT_URL, APPWRITE_PROJECT_ID } from "./constants";

const client = new Client()
  .setEndpoint(`${APPWRITE_ENDPOINT_URL}`)
  .setProject(`${APPWRITE_PROJECT_ID}`);

const account = new Account(client);

export { client, account };
