const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51Iz1vISAh7sd2ePrF2TwQFwrVn8aAQ5F2Bqv5FAy3AOXDKkRCT6TlVYkdeg5fbx7jvEQU9URGck4STN1gB5MaYwM006SoMzHXZ"
)
//const stripe = require("stripe")("sk_test_51IzM9lGv1p7pZJfUGmIOhcBcCdlRjaXmR3eQt2E5JkNTIFhdkkVV71FLGHHRm0jSbYfRZDVP4d5kjK5oOx0Qjudc00kJtRNIpq")

//......Set API.......

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json());
//to emulate in local


//API routes
app.get('/', (request, response) => response.status(200).send("Hello World"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment  Request Recieved BOOOOOMMMM!!! for this amount >>>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total, // subunits of the currency 
        currency: 'inr',
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/clone-dc30d/us-central1/api