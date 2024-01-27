import express from 'express';
import { Project } from '../schema/Project';

const projectRouter = express.Router();

// Define your routes here
projectRouter.get('/all', validateContentType,
    async (req, res) => {
        Project.find({}).then(projects => {
            //// console.log(projects);
            res.status(200).json({ data: projects });
        }).catch(err => {
            res.status(500).send({ message: `Internal Server Error - ${err}` });
        });
    }
);

function validateContentType(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.headers['content-type'] == 'application/json') {
        next();
    } else {
        res.status(400).send(`Bad Request - content-type must be application/json`);
    }
}

export default projectRouter;
