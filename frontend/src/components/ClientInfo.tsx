import React from 'react'
import { ClientInfoType } from '../utils/types'
import { FaEnvelope, FaIdBadge, FaPhone } from 'react-icons/fa'

type ClientInfoProps = {
    client: ClientInfoType
}

const ClientInfo = ({ client }: ClientInfoProps) => {

    return (
        <>
            <h5 className="mt-5">Client Information</h5>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <FaIdBadge /> {client.name}
                </li>

                <li className='list-group-item'>
                    <FaEnvelope /> {client.email}
                </li>

                <li className='list-group-item'>
                    <FaPhone /> {client.phone}
                </li>
            </ul>
        </>
    )
}

export default ClientInfo;