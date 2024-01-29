// import React from 'react'
import ClientRow from './ClientRow';
import { ClientRowType } from '../utils/types';
import Spinner from './Spinner';
import { useState } from 'react';

const Clients = () => {
	// const {loading,error,data} = useQuery(GET_CLIENTS);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const [data, setData] = useState({clients:[]});
	
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