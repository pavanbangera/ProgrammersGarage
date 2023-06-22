import React, { useContext, useState, useRef, useEffect } from 'react'
import CourseIDLession from './CourseIDLession'
import LessionList from './LessionList'
import LessionContext from '../context/Lession/LessionContext'
import { useNavigate } from 'react-router-dom'
import Editor from './Editor';

const Lession = () => {
    const { find, addLession } = useContext(LessionContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const ref1 = useRef(null)


    const handleEditorChange = (value) => {
        setDescription(value);
    };
    const handleSubmit = () => {
        addLession(find.id, title, description, link);
        setTitle("")
        setDescription("")
        setLink("")
        ref1.current.click()
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('auth-token')) {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container my-4">

            {find.found && (
                <div className="container">
                    <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        +
                    </button>

                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Add Lesson</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Course Id</label>
                                        <input type="text" className="form-control" id="cId" name='cId' value={find.id} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Course Title</label>
                                        <input type="text" className="form-control" id="cTitle" name='ctitle' value={find.title} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Lession Title</label>
                                        <input type="text" className="form-control" id="title" name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter the lesson title" required />
                                    </div>
                                    <Editor value={description} onChange={handleEditorChange} />
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Video Link</label>
                                        <input type="text" className="form-control" id="link" name='link' value={link} onChange={e => setLink(e.target.value)} placeholder="Enter video link here" required />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" ref={ref1} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <CourseIDLession />
            {find.found && (
                <LessionList />
            )}



        </div>
    )
}

export default Lession