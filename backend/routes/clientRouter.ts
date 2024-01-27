import express from 'express';

const clientRouter = express.Router();

// Define your routes here
clientRouter.get('/all', (req, res, next) => {
    if (req.headers['content-type'] == 'application/json') {
        next();
    }
}, (req, res) => {

});

export default clientRouter;
