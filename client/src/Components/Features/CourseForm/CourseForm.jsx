import React, { useState } from 'react'

export const CourseForm = () => {
    // corse:{
    //     type: {
    //       name: {
    //         type: String,
    //         required: true,
    //       },
    //       CourseInformation: {
    //         type: [
    //           {
    //             nameSubject: String,
    //             topics: {
    //               type: [
    //                 {
    //                   subject: String,
    //                   isDone: {
    //                     type: Boolean,
    //                     required: true,
    //                     default: false,
    //                   },
    //                 },
    //               ],
    //             },
    //             summery: String,
    //             links: {
    //               type: [
    //                 {
    //                   tasks: {
    //                     type: String,
    //                     default: "",
    //                   },
    //                   Presentations: {
    //                     type: String,
    //                     default: "",
    //                   },
    //                   StudyAid: {
    //                     type: String,
    //                     default: "",
    //                   },
    //                 },
    //               ],
    //             },
    //             isDone: {
    //               type: Boolean,
    //               required: true,
    //               default: false,
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   },
    const [course, setCourse] = useState({
        course: {
            CourseInformation:
                [
                    {
                        nameSubject: '',
                        summery: '',
                        topics:
                            [
                                {
                                    subject: ''
                                }
                            ]
                    }
                ],
            name: ''
        }
    })

    const handleinput = (e) => {
        setCourse({
            [e.target.name]: e.target.value
        })
    }
    const shwoDetails = () => {
        
        console.log(course);
    }
    return (
        <div>
            <form>
                <label htmlFor="course">שם הקורס:</label>
                <input type="text" name="name" onChange={handleinput} />

                <lable>נושאי קורס:</lable>
                <lable>שם הנושא:</lable>
                <input type="text" name="nameSubject" onChange={handleinput}></input>
                <lable>תקציר:</lable>
                <textarea type="text" name="summery" onChange={handleinput}></textarea>

                <lable>יחידות לימוד:</lable>
                <input type="text" name="subject"></input>
                
            </form>
            <button onClick={shwoDetails}>Click</button>
        </div>
    )
}
