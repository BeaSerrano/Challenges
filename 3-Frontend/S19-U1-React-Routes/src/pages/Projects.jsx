import projectsData from '../data/projects'
import { useState, useEffect } from 'react'

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (
        <>
            <h1>Proyectos</h1>
            <ul>
                {projects.map(project => 
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <img src={project.image} alt={project.name} width='200' />
                        <p>{project.description}</p>
                        <a href={project.url} target='_blank'>Ver proyecto</a>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Projects