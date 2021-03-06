const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51EsBRNK2g1SvEsOMtVm0lkTef1a1qPDaNw6UlJyIDGDl96ALM0CD5qiRpkGMsOEfAvyn4MXhk7jhb7cRlaRXbz6k00e7jyA0Xt"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  //OK -Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/clone-666e1/us-central1/api
