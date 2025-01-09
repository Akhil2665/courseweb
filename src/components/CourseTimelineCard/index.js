// src/components/CourseTimelineCard/index.js
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = ({courseDetails}) => {
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card">
      <div className="course-title-container">
        <h2>{courseTitle}</h2>
        <div className="duration-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>

      <p>{description}</p>

      <div className="tags-container">
        {tagsList.map(tag => (
          <p className="tag-name" key={tag.id}>
            {tag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
