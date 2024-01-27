import express from 'express';
import { Project } from '../schema/Project';
import { validateContentType } from '../utils/utils';

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

export default projectRouter;
