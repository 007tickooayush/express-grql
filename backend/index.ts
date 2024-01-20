// const express = require('express')
import express from 'express';
import schema from './schema/schema'
const app = express();
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { connectMongo } from './config/db';

require('dotenv').config();
const PORT_ = process.env.PORT || 5000;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))


connectMongo();

app.listen(PORT_, () => {
    console.log('SERVER RUNNING ON PORT: ', PORT_);
})