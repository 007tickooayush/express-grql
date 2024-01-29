import express from 'express';
import { Client } from '../schema/Client';
import { validateContentType } from '../utils/utils';
import { Project } from '../schema/Project';

const clientRouter = express.Router();

// Define your routes here
clientRouter.get('/all', validateContentType,
    (req, res) => {
        Client.find().then(clients => {
            res.status(200).json({ data: clients });
        }).catch(err => {
            res.status(500).send({ message: `Error: ${err}` });
        });
    }
);

clientRouter.post('/add', validateContentType,
    (req, res) => {
        const client = new Client({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });
        client.save().then(client => {
            res.status(200).json({ data: client });
        }).catch(err => {
            res.status(500).send({ message: `Error: ${err}` });
        });
    }
);

clientRouter.get('/delete/:id', validateContentType,
    (req, res) => {
        Client.findByIdAndDelete(req.params.id).then(client => {


            Project.deleteMany({ clientId: req.params.id }).then((projects) => {
                res.status(200).json({ data: client, project: { deleteCount: projects.deletedCount, acknowledged: projects.acknowledged } });
            }).catch((err) => {
                res.status(500).send({ message: `Error: ${err}` });
            })
        }).catch(err => {
            res.status(500).send({ message: `Error: ${err}` });
        });
    }
);

clientRouter.put('/update/:id', validateContentType,
    (req, res) => {
        Client.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }).then(client => {
            res.status(200).json({ data: client });
        }).catch(err => {
            res.status(500).send({ message: `Error: ${err}` });
        });
    }
);

// delete the projects linked to the client


export default clientRouter;
