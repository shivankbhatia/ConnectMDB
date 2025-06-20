//take an instance of Express.
const express = require('express');
const connectDB = require('./dbConnect');

//create an app..
const app = express();

const PORT = 2417;

//body parser...
app.use(express.json());
//connect DB;
connectDB();

app.get('/', (req, response) => {
    console.log("Home Page Handler.");
    response.send("Hello, Welcome to Website...")
});

//start the app...
app.listen(PORT, () => {
    console.log("Server is Running..")
})