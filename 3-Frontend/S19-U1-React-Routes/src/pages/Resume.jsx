import { studies, experiences } from '../data/resume'

const Resume = () => {
    return (
        <>
            <h1>Resume</h1>

            <h2>Studies</h2>
            <ul>
                {studies.map(study => 
                    <li key={study.id}>
                        <h3>{study.title}</h3>
                        <p>{study.institution}</p>
                        <small>{study.date}</small>
                    </li>
                )}
            </ul>

            <h2>Experiences</h2>
            <ul>
                {experiences.map(experience => 
                    <li key={experience.id}>
                        <h3>{experience.title}</h3>
                        <p>{experience.company}</p>
                        <small>{experience.date}</small>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Resume