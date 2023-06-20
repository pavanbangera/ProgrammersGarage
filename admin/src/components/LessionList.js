import React, { useContext, useRef, useState } from 'react'
import LessionListItem from './LessionListItem'
import LessionContext from '../context/Lession/LessionContext'
import Editor from './Editor';


const LessionList = () => {
    const { getLession, editLession } = useContext(LessionContext)
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const update = (citem) => {
        ref1.current.click();
        setId(citem._id)
        setTitle(citem.title)
        setDescription(citem.description)
        setLink(citem.link)
    }
    const handleEditorChange = (value) => {
        setDescription(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault(e);
        editLession(id, title, description, link)
        ref2.current.click()

    }
    return (
        <div className="container">
            <div className="container">
                <button type="button" ref={ref1} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Lession Title</label>
                                    <input type="text" className="form-control" id="title" name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter the course title" required />
                                </div>
                                <Editor value={description} onChange={handleEditorChange} />
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Video Link</label>
                                    <input type="text" className="form-control" id="link" name='link' value={link} onChange={e => setLink(e.target.value)} placeholder="Enter video link here" required />
                                </div>


                            </div>
                            <div className="modal-footer">
                                <button type="button" ref={ref2} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={handleSubmit} >Update note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Link</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {getLession.map(item => {
                        return <tr key={item._id}><LessionListItem value={item} update={update} /></tr>
                    })}

                </tbody>
            </table>
        </div>

    )
}

export default LessionList