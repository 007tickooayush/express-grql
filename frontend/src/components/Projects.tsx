import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_PROJECTS } from '../queries/projectQueries';
import Spinner from './Spinner';
import { ProjectCardType } from '../utils/types';
import ProjectCard from './ProjectCard';



const Projects = () => {

    const { loading, error, data } = useQuery(GET_PROJECTS);

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