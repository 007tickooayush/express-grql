// const express = require('express')
import express from 'express';
import schema from './schema/schema'
const app = express();

import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';

require('dotenv').config();
const PORT = process.env.PORT || 5000

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))


app.listen(PORT, () => {
    console.log('SERVER RUNNING ON PORT: ', PORT);
})