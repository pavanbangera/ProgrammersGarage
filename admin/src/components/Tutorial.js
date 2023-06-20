import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TutorialAdd from './TutorialAdd';
import TutorialContext from '../context/Tutorial/TutorialContext';
import TutorialList from './TutorialList';


const Tutorial = () => {
    const { get } = useContext(TutorialContext)

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('auth-token')) {
            navigate('/login');
        }
        else {
            get()
        } // eslint-disable-next-line
    }, [])



    return (
        <div className="container my-4">
            <h1 className='my4'>Tutorials Info</h1>
            <TutorialAdd />
            <TutorialList />
        </div>
    )
}

export default Tutorial