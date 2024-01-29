import React, { useState } from 'react'
import { ProjectType } from '../utils/types'

type EditProjectFormProps = {
    project: ProjectType
}

const EditProjectForm = ({ project }: EditProjectFormProps) => {

    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState(() => {
        switch (project.status) {
            case "Not Started":
                return "new";
            case "In Progress":
                return "progress";
            case "Completed":
                return "completed";
            default:
                throw new Error(`Unknown status: ${project.status}`);
        }
    });


    const updateProject = () => {
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !description || !status) {
            return alert('Please fill out the fields');
        }

        updateProject();
    }

    return (
        <div className='mt-5'>
            <h3>Update Project Details</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={name as string}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea
                        className='form-control'
                        id='description'
                        value={description as string}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Status</label>
                    <select
                        id='status'
                        className='form-select'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value='new'>Not Started</option>
                        <option value='progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                    </select>
                </div>

                <button
                    type='submit'
                    className='btn btn-primary'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default EditProjectForm;