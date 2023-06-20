import React, { useEffect } from 'react'
import CourseAdd from './CourseAdd'
import CourseList from './CourseList'
import { useNavigate } from 'react-router-dom'

const Course = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('auth-token')) {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <CourseAdd />
            <CourseList />
        </>
    )
}

export default Course