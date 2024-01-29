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

projectRouter.post('/add', validateContentType,
    (req, res) => {
        const project = new Project({
            name: req.body.name,
            description: req.body.description,
            clientId: req.body.clientId,
        });
        project.save().then(project => {
            res.status(200).json({ data: project });
        }).catch(err => {
            res.status(500).send({ message: `Internal Server Error - ${err}` });
        });
    }
);

projectRouter.get('/delete/:id', validateContentType,
    (req, res) => {
        Project.findByIdAndDelete(req.params.id).then(project => {
            res.status(200).json({ data: project });
        }).catch(err => {
            res.status(500).send({ message: `Internal Server Error - ${err}` });
        });
    }
);

projectRouter.put('/update/:id', validateContentType,
    (req, res) => {
        Project.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
        },{new:true}).then(project => {
            res.status(200).json({ data: project });
        }).catch(err => {
            res.status(500).send({ message: `Internal Server Error - ${err}` });
        });
    }
);

export default projectRouter;
