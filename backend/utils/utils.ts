import express from 'express';

export function validateContentType(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.headers['content-type'] == 'application/json') {
        next();
    } else {
        res.status(400).send(`Bad Request - content-type must be application/json`);
    }
}