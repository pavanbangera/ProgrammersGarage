import React, { useContext, useState } from 'react';
import LessionContext from './LessionContext';
import CourseContext from '../Course/CourseContext';

const LessionState = (props) => {
    const { getItem } = useContext(CourseContext);
    const [getLession, setGetLession] = useState([])
    const [find, setFind] = useState({ found: false, id: '', title: '' });

    const courseFind = (id) => {
        const lesson = getItem.find((element) => element._id === id);
        if (lesson) {
            setFind({ found: true, id, title: lesson.title });
            getCourse(id)
        } else {
            setFind({ found: false, id: '', title: '' });
        }
    };


    const addLession = async (courseId, title, description, link) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/lession/addlession`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ courseId, title, description, link })
        })
        const json = await response.json()
        setGetLession(getLession.concat(json))
    }
    const getCourse = async (courseId) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/lession/getLession/${courseId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const json = await response.json()
        setGetLession(json)
    }
    const editLession = async (id, title, description, link) => {
        await fetch(`${process.env.REACT_APP_API}/api/lession/updateLession/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, link }),

        });


        const NewItem = JSON.parse(JSON.stringify(getLession))
        for (let index = 0; index < getLession.length; index++) {
            const element = NewItem[index];
            if (element._id === id) {
                NewItem[index].title = title;
                NewItem[index].description = description;
                NewItem[index].link = link;
                break;
            }

        }
        setGetLession(NewItem)
    }

    const deleteLession = async (id) => {
        await fetch(`${process.env.REACT_APP_API}/api/lession/deleteLession/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },

        });
        setGetLession(getLession.filter((item) => { return item._id !== id }))
    }

    return (
        <LessionContext.Provider value={{ courseFind, find, addLession, getLession, editLession, deleteLession }}>
            {props.children}
        </LessionContext.Provider>
    );
};

export default LessionState;
