import React, { useContext, useRef, useState } from 'react'
import TutorialListItem from './TutorialListItem'
import TutorialContext from '../context/Tutorial/TutorialContext'
import Editor from './Editor'

const TutorialList = () => {
    const { getTutorial, editTutorial } = useContext(TutorialContext)
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [content, setContent] = useState("")
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const update = (citem) => {
        setId(citem._id)
        setTitle(citem.title)
        setImg(citem.image)
        setContent(citem.content)

        ref1.current.click()


    }
    const convert = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImg(reader.result)
        };

        reader.onerror = (error) => {
            console.log('error', error);
        };

        reader.readAsDataURL(file);
    }
    const handleEditorChange = (value) => {
        setContent(value);
    };
    const handleUpdate = () => {
        ref2.current.click()
        editTutorial(id, title, img, content)
    }
    return (
        <div className="container my-4">

            <button type="button" className="btn btn-primary d-none " ref={ref1} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Tutorial</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Tutorial title</label>
                                <input type="text" className="form-control" id="title" name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter the course title" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFileSm" className="form-label">Add Cover photo</label>
                                <input type="file" accept='image/*' onChange={convert} required />
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
                        <th scope="col">Tutorial title</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {getTutorial.map(item => {
                        return <tr key={item._id}>
                            <TutorialListItem value={item} update={update} />
                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default TutorialList