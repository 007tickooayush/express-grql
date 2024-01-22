import React from 'react'
import { ClientRowType } from '../utils/types';
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

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
        // refetchQueries: [
        //     { query: GET_CLIENTS }
        // ],

        //// Faster approach: using cache updates
        update(cache, { data: { deleteClient } }) {
            const { clients }: any = cache.readQuery({
                query: GET_CLIENTS
            });

            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: clients.filter((client: ClientRowType) => client.id !== deleteClient.id) },
            })
        }
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