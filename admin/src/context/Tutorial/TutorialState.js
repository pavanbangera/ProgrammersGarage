import React, { useState } from 'react'
import TutorialContext from './TutorialContext'

const TutorialState = (props) => {
    const [getTutorial, setTutorial] = useState([])
    const [tutorialCount, setTutorialCount] = useState("0")


    const addTutorial = async (title, image, content) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/tutorial/addTutorial`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, image, content })
        })
        const json = await response.json()
        setTutorial(getTutorial.concat(json))
    }
    const get = async (e) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/tutorial/getTutorial`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const json = await response.json()
        setTutorial(json)
    }

    const deleteTutorial = async (id) => {
        await fetch(`${process.env.REACT_APP_API}/api/tutorial/deleteTutorial/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },

        });
        setTutorial(getTutorial.filter((item) => { return item._id !== id }))
    }

    const editTutorial = async (id, title, image, content) => {
        await fetch(`${process.env.REACT_APP_API}/api/tutorial/updateTutorial/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, image, content }),

        });


        const NewItem = JSON.parse(JSON.stringify(getTutorial))
        for (let index = 0; index < getTutorial.length; index++) {
            const element = NewItem[index];
            if (element._id === id) {
                NewItem[index].title = title;
                NewItem[index].image = image;
                NewItem[index].content = content;
                break;
            }

        }
        setTutorial(NewItem)
    }

    const countTutorial = async () => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/tutorial/countTutorial`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        });
        const json = await response.json()
        setTutorialCount(json.toString())

    }

    return (
        <TutorialContext.Provider value={{ addTutorial, getTutorial, get, deleteTutorial, editTutorial, tutorialCount, countTutorial }}>
            {props.children}
        </TutorialContext.Provider>
    )
}

export default TutorialState