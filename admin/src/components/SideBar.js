import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('auth-token')
        navigate("/login")
    }
    useEffect(() => {
        if (!localStorage.getItem('auth-token')) {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>

            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    {/* <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">Admin</span>
                    </Link> */}
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-link align-middle px-0">
                                <i className="fa-solid fa-gauge"></i>  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fa-solid fa-video"></i> <span className="ms-1 d-none d-sm-inline">Course</span> </Link>
                            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <Link to="/course" className="nav-link px-0"> <span className="d-none d-sm-inline">Course</span></Link>
                                </li>
                                <li className="w-100">
                                    <Link to="/lession" className="nav-link px-0"> <span className="d-none d-sm-inline">Lession</span></Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/tutorial" className="nav-link px-0 align-middle">
                                <i className="fa-solid fa-book"></i> <span className="ms-1 d-none d-sm-inline">Tutorials</span></Link>
                        </li>
                        <li>
                            <Link to="/blog" className="nav-link px-0 align-middle">
                                <i className="fa-solid fa-blog"></i> <span className="ms-1 d-none d-sm-inline">Blog</span> </Link>
                        </li>
                        <br />
                        <br />

                        <li>
                            <div className="dropdown pb-4">
                                <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://avatars.githubusercontent.com/u/92009490?s=400&u=dfdbb48280cfe92e6f7213d71ba62bbbc67b8656&v=4" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                    <span className="d-none d-sm-inline mx-1">Action</span>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><button className="dropdown-item" onClick={handleLogout} >Sign out</button></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <hr />

                </div>
            </div>

        </>
    )
}

export default SideBar