import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();

let client = null;
let productsCollection = null;
let usersCollection = null;

export async function connect() {
    if (!client) {
        client = new MongoClient(process.env.mongo_URL);
        await client.connect();
        console.log("Connected to the database");
    }

    const db = await client.db(process.env.mongo_name);
    productsCollection = await db.collection('products');
    usersCollection = await db.collection('users');
}

export async function products() {
    return productsCollection;
}

export async function users() {
    return usersCollection;
}