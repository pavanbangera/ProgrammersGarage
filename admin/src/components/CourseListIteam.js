import React, { useContext } from 'react'
import CourseContext from '../context/Course/CourseContext'

const CourseListIteam = (props) => {
    const { deleteCourse } = useContext(CourseContext)
    return (
        <>
            <th scope="row">{props.value._id}</th>
            <td>{props.value.title}</td>
            <td>{props.value.description.slice(0, 120)}</td>
            <td>
                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteCourse(props.value._id) }}  ></i>
                <i className="fa-regular fa-pen-to-square mx-1" onClick={() => { props.update(props.value) }}></i>
            </td>

        </>
    )
}

export default CourseListIteam