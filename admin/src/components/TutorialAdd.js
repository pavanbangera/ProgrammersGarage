import React, { useRef, useState, useContext } from 'react'
import Editor from './Editor';
import TutorialContext from '../context/Tutorial/TutorialContext';

const TutorialAdd = () => {
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [content, setContent] = useState("")
    const { addTutorial } = useContext(TutorialContext)

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

    const ref1 = useRef(null)
    const handleSubmit = () => {
        ref1.current.click()
        addTutorial(title, img, content)
        setContent("")
        setImg("")
        setTitle("")
    }
    return (
        <div className="container my-4">
            <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add Tutorial
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add tutorial</h5>
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
                            <button type="button" ref={ref1} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TutorialAdd