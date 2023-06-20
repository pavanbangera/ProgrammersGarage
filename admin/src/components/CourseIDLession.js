import React, { useContext, useState, useEffect } from 'react';
import LessionContext from '../context/Lession/LessionContext';
import CourseContext from '../context/Course/CourseContext';

const CourseIDLession = () => {
    const [id, setId] = useState('');
    const { courseFind, find } = useContext(LessionContext);
    const { getCourse } = useContext(CourseContext);

    const handleSubmit = () => {
        courseFind(id);
    };

    useEffect(() => {
        getCourse();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container pt-4">
            <div className="row mb-4">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    <h6>Enter Course ID</h6>
                </label>
                <div className="col-sm-6">
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        name="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-outline-secondary col-sm-2"
                    type="button"
                    id="button-addon2"
                    onClick={handleSubmit}
                >
                    Button
                </button>
            </div>
            <div>
                {/* Display the find object here */}

                {!find.found && <p>No course found.</p>}
            </div>
        </div>
    );
};

export default CourseIDLession;
