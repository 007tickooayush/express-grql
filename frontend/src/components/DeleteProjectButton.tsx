import { useMutation } from '@apollo/client'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import { useNavigate } from 'react-router-dom'
import { GET_PROJECTS } from '../queries/projectQueries'

type DeleteProjectButtonProps = {
    projectId: String
}

const DeleteProjectButton = ({ projectId }: DeleteProjectButtonProps) => {
    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }]
    });

    return (
        <div className='d-flex mt-5 ms-auto'>
            <button className="btn btn-danger m-2" onClick={() => deleteProject()}>
                <FaTrash className='icon' /> Delete Project
            </button>
        </div>
    )
}

export default DeleteProjectButton;