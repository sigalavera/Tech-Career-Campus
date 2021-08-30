import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { fetchSyllabus } from '../../../FetchFunctions/FetchFunctions'
import { useSelector, useDispatch } from 'react-redux';
import { getSyllabus } from '../../../Redux/actions/SyllabusAction';
import { CourseForm } from '../../Features/CourseForm/CourseForm';

const SyllabusComponent = () => {
  const syllabus = useSelector(state => state.syllabus.state);
  const dispatch = useDispatch();
  console.log(syllabus);
  useEffect(() => {

    fetchSyllabus()
      .then(data => {
        dispatch(getSyllabus(data.data[0]));
      })

  }, [])

  return (
    <>
    syllabus.c
      <h1>סילבוס</h1>
      <CourseForm/>
      <VerticalTimeline>
        <h1>{syllabus?.corse.name}</h1>
        {syllabus?.corse.CourseInformation.map((courseItem => {
          return (
            <VerticalTimelineElement
              key={courseItem.nameSubject}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h2 className="vertical-timeline-element-title">{courseItem.nameSubject}</h2>
              <h4 className="vertical-timeline-element-subtitle">
                <ul>
                  {courseItem.topics.map((topic, index) => {
                    return <li key={index}>{topic.subject}</li>;
                  })}
                </ul>
              </h4>
              <p>
                {courseItem.summery}
              </p>
              <ul><h3>Links:</h3>
                {
                  courseItem.links.map((link) => {
                    return (
                      <>
                        <li> <a href={link.tasks}>Google Drive</a> </li>
                        <li> <a href={link.Presentations}>Presentation</a> </li>
                      </>
                    )
                  })
                }
              </ul>

            </VerticalTimelineElement>)
        }))}

      </VerticalTimeline>;
    </>
  )
};
export default SyllabusComponent;