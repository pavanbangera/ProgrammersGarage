import React, { useState } from 'react'
import CourseContext from './CourseContext'

const CourseState = (props) => {
    // const [NewCourse, setNewCourse] = useState([])
    const [getItem, setGetItem] = useState([]);
    const [courseCount, setCourseCount] = useState("0")

    const addCourse = async (title, description, files) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/course/addCourse`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, files })
        })
        const json = await response.json()
        setGetItem(getItem.concat(json))
    }
    const getCourse = async (e) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/course/getCourse`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const json = await response.json()
        setGetItem(json)
    }
    const editCourse = async (id, title, description, files) => {
        await fetch(`${process.env.REACT_APP_API}/api/course/updateCourse/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, files }),

        });


        const NewItem = JSON.parse(JSON.stringify(getItem))
        for (let index = 0; index < getItem.length; index++) {
            const element = NewItem[index];
            if (element._id === id) {
                NewItem[index].title = title;
                NewItem[index].description = description;
                NewItem[index].cover = files;
                break;
            }

        }
        setGetItem(NewItem)
    }

    const deleteCourse = async (id) => {
        await fetch(`${process.env.REACT_APP_API}/api/course/deleteCourse/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },

        });
        setGetItem(getItem.filter((item) => { return item._id !== id }))
    }

    const countCourse = async () => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/course/countCourse`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        });
        const json = await response.json()
        setCourseCount(json.toString())

    }
    return (
        <CourseContext.Provider value={{ addCourse, getCourse, getItem, editCourse, deleteCourse, countCourse, courseCount }}>
            {props.children}
        </CourseContext.Provider>
    )
}



export default CourseState