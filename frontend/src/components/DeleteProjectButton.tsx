import { useMutation } from '@apollo/client'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

type DeleteProjectButtonProps = {
    projectId: String
}

const DeleteProjectButton = ({ projectId }: DeleteProjectButtonProps) => {
    const navigate = useNavigate();

    const deleteProject = () => {

    };

    return (
        <div className='d-flex mt-5 ms-auto'>
            <button className="btn btn-danger m-2" onClick={() => deleteProject()}>
                <FaTrash className='icon' /> Delete Project
            </button>
        </div>
    )
}

export default DeleteProjectButton;