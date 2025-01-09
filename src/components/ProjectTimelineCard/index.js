// src/components/ProjectTimelineCard/index.js

import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = ({projectDetails}) => {
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="course-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="course-title-container">
        <h2>{projectTitle}</h2>
        <div className="duration-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>

      <a href={projectUrl} target="_blank" rel="noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
