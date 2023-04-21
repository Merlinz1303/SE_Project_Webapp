const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const _ = require("lodash");
const { response } = require("express");
const axios = require("axios");
const { Int32 } = require("mongodb");
const port = 3000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// -----------------------------------mongoDB-----------------------------------
// mongoose.connect(
//   "mongodb://Arm:123456ABCD@ac-3frmzjv-shard-00-00.zid9ysy.mongodb.net:27017,ac-3frmzjv-shard-00-01.zid9ysy.mongodb.net:27017,ac-3frmzjv-shard-00-02.zid9ysy.mongodb.net:27017/?ssl=true&replicaSet=atlas-12mhlm-shard-0&authSource=admin&retryWrites=true&w=majority",
//   {
//     useNewUrlParser: "true",
//     dbName: "SE_Database",
//   }
// );
// mongoose.connection.on("error", (err) => {
//   console.log("err", err);
// });
// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected");
// });

const { ObjectId } = require('mongodb');
require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;
let url =
  "mongodb://Merlinz:TrafficJam13032543@ac-3frmzjv-shard-00-00.zid9ysy.mongodb.net:27017,ac-3frmzjv-shard-00-01.zid9ysy.mongodb.net:27017,ac-3frmzjv-shard-00-02.zid9ysy.mongodb.net:27017/?ssl=true&replicaSet=atlas-12mhlm-shard-0&authSource=admin&retryWrites=true&w=majority";

app.get("/api", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("SE_Database");
    dbo
      .collection("users")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
        db.close();
      });
  });
});

app.get("/api2", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("SE_Database");
    dbo
      .collection("CAR")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
        db.close();
      });
  });
});

app.get("/booking", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("SE_Database");
    const findBooking = { _id: new ObjectId("642c4136e374764bef661483") };
    dbo
      .collection("booking")
      .findOne(findBooking, function (err, resultBooking) {
        if (err) throw err;
        const findUser = { _id: resultBooking.user_id };
        dbo.collection("users").findOne(findUser, function (err, resultUser) {
          if (err) throw err;
          const findCar = { _id: resultBooking.car_id };
          dbo.collection("CAR").findOne(findCar, function (err, resultCar) {
            if (err) throw err;
            const result = {
              ...resultBooking,
              user_data: resultUser,
              car_Data: resultCar,
            };
            console.log("result", result);
            res.json(result);
            db.close();
          });
        });
      });
  });
});

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("SE_Database");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("CAR").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("SE_Database");
//   dbo.collection("users").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result[0]);
//     // res.json(result)
//     db.close();
//   });
// });

// -----------------------------------------------------------

// connection.once("open", async function () {
//   const BookSchema = mongoose.Schema({
//     Car: String,
//     Price: Number,
//     imageURL: String,
//     Color: String,
//   });
//   const Book = mongoose.model("car", BookSchema, "car");
//   var book1 = new Book({
//     Car: "Honda jazz",
//     Price: 749000,
//     imageURL: "https://images.autofun.co.th/file1/6e97d32407334294991b42f207eaf40b_1125x630.jpg",
//     Color: "white"
//   });
//   book1.save(function (err, doc) {
//     if (err) return console.error(err);
//     console.log(doc + " saved to bookstore collection.");
//   });
// });

// -----------------------------------mongoDB-----------------------------------

// -----------------------------------OMISE----------------------------------

// var amount = 500000;
// var currency = "thb";

// var omise = require("omise")({
//   publicKey: process.env.OMISE_PUBLIC_KEY,
//   secretKey: process.env.OMISE_SECRET_KEY,
// });

// var source = {
//   type: "promptpay",
//   amount: 500000,
//   currency: "thb",
// };

// var customer = {
//   email: "john.doe@example.com",
//   description: "John Doe (id: 30)",
//   metadata: {
//     note: "vip",
//   },
// };

// var cardDetails = {
//   card: {
//     name: "JOHN DOE",
//     city: "Bangkok",
//     postal_code: 10320,
//     number: "4242424242424242",
//     expiration_month: 2,
//     expiration_year: 2024,
//   },
// };

// omise.sources
//   .create(source)
//   .then(function (resSource) {
//     return omise.charges.create({
//       amount: amount,
//       source: resSource.id,
//       currency: currency,
//       return_uri: "http://localhost:3000/message",
//     });
//   })
//   .then(function (charge) {
//     console.log(charge.source.scannable_code.image);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// omise.tokens.create(cardDetails, function (err, token) {
//   omise.charges.create({
//     amount: 120000,
//     currency: 'thb',
//     card: token.id,
//     metadata: {
//       note: 'test card'
//     }
//   }, function (err, charge) {
//     if (err) {
//       console.log('error', err);
//       return;
//     }
//     // console.log('charge', charge);
//   });
// });

// app.post('/webhooks', (req, res) => {
//   var cardDetails = req.body;
//   console.log(cardDetails)
//   return res.send(cardDetails)
// })

// app.post('/show', (req, res) => {
//   var cardDetails = req.body;
//   console.log(cardDetails)

//   omise.tokens.create(cardDetails, function (err, token) {
//     console.log('token', token.id)
//     omise.charges.create({
//       amount: 120000,
//       currency: 'thb',
//       return_uir: 'http://example.com',
//       card: token.id,
//       metadata: {
//         note: 'test card'
//       }
//     }, function (err, charge) {
//       if (err) {
//         console.log('error', err);
//         return;
//       }
//     });
//   });

//   return res.send('success')
// })

// -----------------------------------OMISE-----------------------------------

// ----------------------------------- SCB -----------------------------------
app.post("/genQR", (req, res) => {
  const generate_QR = (token) => {
    axios
      .post(
        "https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create",
        {
          qrType: "PP",
          ppType: "BILLERID",
          ppId: "832484103855486",
          amount: req.body.amount,
          ref1: "TESTREF1",
          ref2: "TESTREF1",
          ref3: "BOL",
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
            resourceOwnerId: process.env.API_Key,
            requestUId: "{{$guid}}",
            "accept-language": "EN",
          },
        }
      )
      .then(function (response) {
        // console.log(response.data.data.qrImage);
        return res.send(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  const generate_Token = () => {
    axios
      .post(
        "https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token",

        {
          applicationKey: process.env.API_Key,
          applicationSecret: process.env.API_Secret,
        },
        {
          headers: {
            "Content-Type": "application/json",
            resourceOwnerId: process.env.API_Key,
            requestUId: "{{$guid}}",
            "accept-language": "EN",
          },
        }
      )
      .then(function (response) {
        generate_QR(response.data.data.accessToken);
        console.log(response.data.data.accessToken);
        // return res.send(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  generate_Token();
});

app.post("/webhooks", (req, res) => {
  var detail = req.body;
  console.log(detail);
  // return res.send(detail);
});

// ----------------------------------- SCB -----------------------------------
