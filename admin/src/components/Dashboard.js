import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogContext from '../context/Blog/BlogContext';
import CourseContext from '../context/Course/CourseContext';
import TutorialContext from '../context/Tutorial/TutorialContext';
import AuthContext from '../context/Auth/AuthContext';


const Dashboard = () => {
    const { countBlog, blogCount } = useContext(BlogContext)
    const { countCourse, courseCount } = useContext(CourseContext)
    const { countTutorial, tutorialCount } = useContext(TutorialContext)
    const { userCount, countUsers } = useContext(AuthContext)

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('auth-token')) {
            navigate('/login');
        } else {
            (async () => {
                await countBlog();
                await countCourse();
                await countTutorial();
                await countUsers();
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="container">
                <h1>Dashboard</h1>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-4 mx-4 my-4  shadow p-3 mb-5 bg-body rounded">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Courses</h5>
                                    <h1 className="card-text">{courseCount}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mx-4 my-4 shadow p-3 mb-5 bg-body rounded ">
                            <div className="card bg-danger text-light">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Tutorials</h5>
                                    <h1 className="card-text">{tutorialCount}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mx-4 my-4 shadow p-3 mb-5 bg-body rounded">
                            <div className="card bg-warning">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Blogs</h5>
                                    <h1 className="card-text">{blogCount}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mx-4 my-4 shadow p-3 mb-5 bg-body rounded">
                            <div className="card bg-primary text-light">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Users</h5>
                                    <h1 className="card-text">{userCount}</h1>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard