import { MongoClient } from "mongodb"

const URI =
    "mongodb+srv://guscassiano:%401b2c3d4@cluster0.lzcn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotify")
