// import React from 'react'
import { ClientRowType } from '../utils/types';
import { FaTrash } from 'react-icons/fa';


type ClientRowProps = {
    key: number,
    client: ClientRowType
}

const ClientRow = ({ client }: ClientRowProps) => {

    const deleteClient = () => {
    };

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