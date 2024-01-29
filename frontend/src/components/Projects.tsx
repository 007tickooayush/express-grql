// import React from 'react'
import Spinner from './Spinner';
import { ProjectCardType } from '../utils/types';
import ProjectCard from './ProjectCard';
import { useState } from 'react';



const Projects = () => {

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const [data, setData] = useState({projects:[]});

    if(loading){
        return <Spinner />
    }

    if(error){
        return <p>Something went Wrong!</p>
    }

    return (
        <>
            {
                data.projects.length > 0 ? (
                    <div className="row mt-5">
                        {
                            data.projects.map((project:ProjectCardType, idx:number) => {
                                return <ProjectCard key={idx} project={project} />
                            })
                        }
                    </div>
                ) : (
                    <p>Nothing to show</p>
                )
            }
        </>
    )
}

export default Projects;