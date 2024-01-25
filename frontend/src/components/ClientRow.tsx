import React from 'react'
import { ClientRowType } from '../utils/types';
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations.ts';
import { GET_CLIENTS } from '../queries/clientQueries.ts';
import { GET_PROJECTS } from '../queries/projectQueries.ts';

type ClientRowProps = {
    key: number,
    client: ClientRowType
}

const ClientRow = ({ client }: ClientRowProps) => {

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: {
            id: client.id
        },
        //// Slower approach : using refetch from backend
        refetchQueries: [
            { query: GET_CLIENTS },
            { query: GET_PROJECTS } // required refetchQueries que to "project" relation
        ],

        //// Faster approach: using cache updates
        // update(cache, { data: { deleteClient } }) {
        //     const { clients }: any = cache.readQuery({
        //         query: GET_CLIENTS
        //     });

        //     cache.writeQuery({
        //         query: GET_CLIENTS,
        //         data: { clients: clients.filter((client: ClientRowType) => client.id !== deleteClient.id) },
        //     })
        // }
    });
    // const {key, client} = props;

    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={() => deleteClient()}>
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}

export default ClientRow;