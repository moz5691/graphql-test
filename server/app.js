const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect(keys.mongoURI,  {useNewUrlParser: true});

mongoose.connection.once('open', ()=> console.log("mongodb connected"));

app.use('/graphql', graphqlHTTP({
    // set up options here.
    schema,
    graphiql: true

}));

const PORT = 4000;

app.listen(PORT, ()=>
    console.log(`listening for request on port ${PORT}`)

);