import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';
const PORT = 3001
const app = express();
app.use(express.json());
app.use(cors());
var hrmData = 'empty'

const uri =
  'mongodb+srv://ht6-22:Tronno321@pulserthing.an139lu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect();

const db = client.db('pulserthing');
console.log(`Connected to Database: ${db.databaseName}`);

var accounts = db.collection('accounts');
console.log(`Connected to Collection: ${accounts.collectionName}`);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/post/signup', async (req, res, next) => {
  console.log('req=', req.body);
  const one = await signup(
    req.body['name'],
    req.body['email'],
    req.body['password']
  );
  if (one !== 1) {
    return res.json({ isLoggedIn: false });
  }
  return res.json({ isLoggedIn: true });
});

app.post('/post/login', async (req, res, next) => {
  console.log('req=', req.body);
  const two = login(req.body['email'], req.body['password']);
  if (two === 1) {
    return res.json({ isLoggedIn: false });
  }
  console.log('Login Successful from route');
  return res.json({ isLoggedIn: true });
});

async function signup(name, email, password) {
  const searchCursor = await accounts.find({ email: `${email}` });
  if ((await searchCursor.next()) != null) {
    console.log('Email already exists.');
    return 0;
  } else {
    await accounts.insertOne({
      name: `${name}`,
      email: `${email}`,
      password: `${password}`,
    });
    console.log('User added Successfully!');
    return 1;
  }
}

async function login(email, password) {
  const searchCursor = await accounts.find({
    email: `${email}`,
    password: `${password}`,
  });
  if ((await searchCursor.next()) == null) {
    console.log('Incorrect username or password.');
    return 0;
  } else {
    console.log('Login Successful!');
    return 1;
  }
}

app.get("/api", (req, res) => {
  if(hrmData !== 'empty'){
    res.json({ message: `Alert! Help needed! HR ${hrmData}` });
  }
  else{
    res.json({ message: "No current nearby alerts." });
  }
});

app.post('/heart-rate', (req, res) => {
  const currentHRM = req.body
  var startIndex = currentHRM["heartrate"].indexOf(":")+1
  var endIndex = currentHRM["heartrate"].indexOf("}")
  hrmData = currentHRM["heartrate"].substring(startIndex, endIndex)
  console.log(hrmData)
  
  res.json({ requestBody: req.body })
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost 3000`);
});
