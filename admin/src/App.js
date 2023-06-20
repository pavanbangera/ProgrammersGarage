
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Course from './components/Course';
import Lession from './components/Lession';
import Tutorial from './components/Tutorial';
import Blog from './components/Blog';
import Login from './components/Login';
import AuthState from './context/Auth/AuthState';
import CourseState from './context/Course/CourseState';
import LessionState from './context/Lession/LessionState';
import TutorialState from './context/Tutorial/TutorialState';
import BlogState from './context/Blog/BlogState';
import SideBar from './components/SideBar';

function App () {
  return (
    <>
      <BrowserRouter>
        <AuthState>
          <CourseState>
            <LessionState>
              <TutorialState>
                <BlogState>
                  <Navbar />
                  <div className="container-fluid">
                    <div className="row flex-nowrap">
                      <SideBar />
                      <div className="col py-3">
                        <Routes>
                          <Route exact path="/" element={<Dashboard />}></Route>
                          <Route exact path="/course" element={<Course />}></Route>
                          <Route exact path="/Lession" element={<Lession />}></Route>
                          <Route exact path="/tutorial" element={<Tutorial />}></Route>
                          <Route exact path="/blog" element={<Blog />}></Route>
                          <Route exact path="/login" element={<Login />}></Route>

                        </Routes>
                      </div>
                    </div>
                  </div>
                </BlogState>
              </TutorialState>
            </LessionState>
          </CourseState>
        </AuthState>
      </BrowserRouter>

    </>
  );
}

export default App;
