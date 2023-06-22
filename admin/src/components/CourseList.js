import React, { useContext, useEffect, useRef, useState } from 'react'
import CourseListIteam from './CourseListIteam'
import CourseContext from '../context/Course/CourseContext';
import Editor from './Editor';

const CourseList = () => {
    const { getCourse, getItem, editCourse } = useContext(CourseContext)
    useEffect(() => {
        getCourse();
        // eslint-disable-next-line
    }, [])
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [files, setfiles] = useState("")
    const update = (citem) => {
        ref1.current.click();
        setId(citem._id)
        setTitle(citem.title)
        setDescription(citem.description)
        setfiles(citem.cover)
    }
    const handleEditorChange = (value) => {
        setDescription(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault(e);
        editCourse(id, title, description, files)
        ref2.current.click()

    }
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
        <div className="container my-4">
            <button type="button" ref={ref1} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Course</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">title</label>
                                <input type="text" className="form-control" id="title" name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter the course title" required />
                            </div>
                            <Editor value={description} onChange={handleEditorChange} />
                            <div className="mb-3">
                                <label htmlFor="formFileSm" className="form-label">Add Cover photo</label>
                                <input type="file" accept='image/*' onChange={convert} />
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={ref2} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={handleSubmit} >Update note</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1>List Courses</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {getItem.map(item => {
                        return <tr key={item._id}><CourseListIteam update={update} value={item} /></tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default CourseList