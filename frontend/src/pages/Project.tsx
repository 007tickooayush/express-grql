import React, { useState } from 'react'
import { Link, Params, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProjectForm from '../components/EditProjectForm';

const Project = () => {
    const { id }: Params = useParams();
    // const { loading, error, data } = useQuery(GET_PROJECT, {
    //     variables: { id }
    // });
    const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const [data, setData] = useState({project:{
        id:'',
        name:'',
        description:'',
        status:'',
        clientId:'',
        client:{
            id:'',
            name:'',
            email:'',
            phone:''
        }
    }});

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
                        <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>Back</Link>

                        <h1>{data.project.name}</h1>

                        <p>{data.project.description}</p>


                        <h5>Project Status</h5>
                        <p className='lead'>{data.project.status}</p>

                        <ClientInfo client={data.project.client} />

                        <EditProjectForm project={data.project} />

                        <DeleteProjectButton projectId={data.project.id}/>
                    </div>
                )
            }
        </>
    )
}

export default Project;