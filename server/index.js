import express from 'express'
const app = express()
const port = 3001
app.use(express.json())
var hrmData = 'empty'


//const client = require('twilio')(
  //  process.env.TWILIO_ACCOUNT_SID,
    //process.env.TWILIO_AUTH_TOKEN);

const alert = "Hello, at x, there is y.";
const sendto = "+14169072853";


const Message = class {
constructor(message,from_,to) {
    this.message = message;
    this.from_ = from_;
    this.to=to;
}
send() {
client.messages.create({
    from: this.from_,
    to: this.to,
    body: this.message
}).then((body) => console.log(message.sid));
}
};

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello world! from server" });
});

app.post('/heart-rate', (req, res) => {
    // console.log(req.body)
    const currentHRM = req.body
    var startIndex = currentHRM["heartrate"].indexOf(":")+1
    var endIndex = currentHRM["heartrate"].indexOf("}")
    hrmData = currentHRM["heartrate"].substring(startIndex, endIndex)
    console.log(hrmData)
    // console.log(typeof(hrmData))
    // console.log(currentHRM)
    
    x = new Message( alert, "+15155172186", sendto);
    x.send();

    // +15155172186 is my twilio phone number lol


    res.json({ requestBody: req.body })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
