const express = require('express');
const app = express();
// import cors from "cors";
const port = process.env.port ||8000;
const mongoose  = require("mongoose");
var bodyParser=require('body-parser');
app.use(bodyParser.json());
const UserRoute = require('./Routes/Auth');
const  ProductsRoute = require('./Routes/DisplayData');
require('dotenv').config()



app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); 
// app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


// app.use('/api/auth', require('./Routes/Auth'));
app.use('/api/auth', UserRoute);
app.use('/api/product', ProductsRoute);

app.get('/hello', (req, res) => {
    res.send("hello world");
})

const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGOURL)
      .then(async() => {
        console.log("Connected to Mongo DB");
    })
      .catch((err) => {
        console.error("failed to connect with mongo");
        console.error(err);
      });
  };

  const startServer = async () => {
    try {
      connectDB();
      app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();