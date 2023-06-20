
import React, { useState, useRef, useContext } from 'react'
import Editor from './Editor'
import BlogContext from '../context/Blog/BlogContext'

const BlogAdd = () => {
    const { addBlog } = useContext(BlogContext)

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleEditorChange = (value) => {
        setContent(value);
    };
    const ref1 = useRef(null)
    const handleSubmit = () => {
        ref1.current.click()
        addBlog(title, content)
        setContent("")
        setTitle("")

    }
    return (
        <div className="container my-4">
            <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add blog
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Blog</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Blog title</label>
                                <input type="text" className="form-control" id="title" name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter the course title" required />
                            </div>
                            <Editor value={content} onChange={handleEditorChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={ref1} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogAdd