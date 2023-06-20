import React, { useContext, useEffect } from 'react'
import BlogAdd from './BlogAdd'
import { useNavigate } from 'react-router-dom';
import BlogContext from '../context/Blog/BlogContext';
import BlogList from './BlogList';

const Blog = () => {
    const { get } = useContext(BlogContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('auth-token')) {
            navigate('/login');
        }
        else {
            get()
        } // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
            <h1>Blog Info</h1>
            <BlogAdd />
            <BlogList />
        </div>
    )
}

export default Blog