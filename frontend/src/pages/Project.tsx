import { useQuery } from '@apollo/client';
import React from 'react'
import { Link, Params, useParams } from 'react-router-dom';
import { GET_PROJECT } from '../queries/projectQueries';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';

const Project = () => {
    const { id }: Params = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { id }
    });

    if (loading) {
        return <Spinner />
    }

    if (error) {
        console.error(error);
        return <p>Something went Wrong...</p>
    }



    return (
        <>
            {
                !loading && !error && (
                    <div className="mx-auto w-75 card p-5">
                        <Link to='/' className='btn btn-light btn-sm'>Back</Link>

                        <h1>{data.project.name}</h1>

                        <p>{data.project.description}</p>


                        <h5>Project Status</h5>
                        <p className='lead'>{data.project.status}</p>

                        <ClientInfo client={data.project.client} />
                    </div>
                )
            }
        </>
    )
}

export default Project;