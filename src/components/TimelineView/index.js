// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="app-page-container">
      <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>

      <div className="chrono-container">
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(item => {
            if (item.categoryId === 'PROJECT') {
              return <ProjectTimelineCard key={item.id} projectDetails={item} />
            }
            if (item.categoryId === 'COURSE') {
              return <CourseTimelineCard key={item.id} courseDetails={item} />
            }
            return null
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
