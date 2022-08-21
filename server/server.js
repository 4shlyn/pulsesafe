import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://ht6-22:Tronno321@pulserthing.an139lu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect();

const db = client.db('pulserthing');
console.log(`Connected to Database: ${db.databaseName}`);

var accounts = db.collection('accounts');
console.log(`Connected to Collection: ${accounts.collectionName}`);


app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.post('/post/signup', (req, res, next) => {
    console.log("req=",req.body);
    const one = signup(req.body["name"], req.body["email"], req.body["password"]);
    // if (one != 1){
    //     res.redirect('http://localhost:3000/signup')
    // }
  });

  app.post('/post/login', (req, res, next) => {
    console.log("req=",req.body);
    const two = login(req.body["email"], req.body["password"]);
    // if (two != 1){
    //     res.redirect('http://localhost:3000/login')
    // }
  });

async function signup(name, email, password){
    const searchCursor = await accounts.find({email: `${email}`});
    if (await searchCursor.next() != null) { 
        console.log("Email already exists."); 
        return 0; 
    }
    else {
        await accounts.insertOne({name: `${name}`, email: `${email}`, password: `${password}`});
        console.log("User added Successfully!")
        return 1;
    }
}

async function login(email, password){
    const searchCursor = await accounts.find({email: `${email}`, password:`${password}`});
    if (await searchCursor.next() == null) { 
        console.log("Incorrect username or password."); 
        return 0; 
    }
    else {
        console.log("Login Successful!")
        return 1;
    }
}

app.listen(3001, () => {
    console.log(`Express is listening on localhost 3000`)
  })
