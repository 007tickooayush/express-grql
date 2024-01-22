// import React from 'react'
import { useQuery } from '@apollo/client'
import ClientRow from './ClientRow';
import { ClientRowType } from '../utils/types';
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';

const Clients = () => {
	const {loading,error,data} = useQuery(GET_CLIENTS);

	if (loading){
		// return <p>Loading...</p>
		return <Spinner />
	}
	
	if(error){
		return <p>Something went Wrong!</p>
	}
	
	return (
		<>
		{
			!loading && !error &&
			(
				<table className='table table-hover mt-3'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						{
							data.clients.map((client:ClientRowType, idx:number) => {
								return <ClientRow key={idx} client={client} />
							})
						}
					</tbody>
				</table>
			)
		}
		</>
	)
}

export default Clients;