import React, { useContext, useState, useRef } from 'react'
import BlogListItem from './BlogListItem'
import BlogContext from '../context/Blog/BlogContext'
import Editor from './Editor'

const BlogList = () => {
    const { getBlog, editBlog } = useContext(BlogContext)


    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const update = (citem) => {
        setId(citem._id)
        setTitle(citem.title)
        setContent(citem.content)

        ref1.current.click()


    }


    const handleEditorChange = (value) => {
        setContent(value);
    };
    const handleUpdate = () => {
        ref2.current.click()
        editBlog(id, title, content)

    }

    return (
        <div className="container">
            <button type="button" className="btn btn-primary d-none " ref={ref1} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Blog</h5>
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
                            <button type="button" ref={ref2} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Blog title</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getBlog.map(item => {
                            return <tr key={item._id}><BlogListItem value={item} update={update} /></tr>

                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default BlogList