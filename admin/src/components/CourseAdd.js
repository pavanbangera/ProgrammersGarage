import React, { useState, useContext } from 'react'
import CourseContext from '../context/Course/CourseContext'
import Editor from './Editor';

const CourseAdd = () => {
    const { addCourse } = useContext(CourseContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [files, setfiles] = useState("")
    // const [getItem, setGetItem] = useState([])
    const handleSubmit = async (e) => {
        addCourse(title, description, files)
        setTitle("")
        setDescription("")
        setfiles("")

    }
    const handleEditorChange = (value) => {
        setDescription(value);
    };


    const convert = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setfiles(reader.result)
        };

        reader.onerror = (error) => {
            console.log('error', error);
        };

        reader.readAsDataURL(file);
    }
    return (
        <div className="container">
            <h1>Courses</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">title</label>
                <input type="text" className="form-control" id="title" name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter the course title" required />
            </div>
            <Editor value={description} onChange={handleEditorChange} />
            <div className="mb-3">
                <label htmlFor="formFileSm" className="form-label">Add Cover photo</label>
                <input type="file" accept='image/*' onChange={convert} required />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default CourseAdd