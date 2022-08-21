export default function verify(name, email, password){
    //setting up db connection
    const { MongoClient, ServerApiVersion } = require('mongodb');

    const uri = "mongodb+srv://ht6-22:Tronno321@pulserthing.an139lu.mongodb.net/?retryWrites=true&w=majority";
    connect();

    async function connect() {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        try{
            //connecting to db
            await client.connect()
            const db = client.db("pulserthing");
            console.log(`Connected to database ${db.databaseName}`)

            //opening accounts collection
            const accounts = db.collection("accounts");

            //checking if email is reused
            const cursor = accounts.find({email: `${email}`});
            if (cursor != null) {
                return;
            }
            console.log("verified new email");

            //inserting new account data into database
            const insertCursor = await accounts.insertOne({"name": `${name}`}, {"email": `${email}`}, {"password": `${[password]}`});
            console.log(insertCursor);


        }
        catch(ex){
            console.error(`something bad happened ${ex}`);
        }
        finally{
            client.close();
        }

    }
}