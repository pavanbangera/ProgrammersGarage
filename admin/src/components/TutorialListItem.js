import React, { useContext } from 'react'
import TutorialContext from '../context/Tutorial/TutorialContext'

const TutorialListItem = (props) => {
    const { deleteTutorial } = useContext(TutorialContext)
    return (
        <>

            <th scope="row">{props.value._id}</th>
            <td>{props.value.title}</td>
            <td>
                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteTutorial(props.value._id) }} ></i>
                <i className="fa-regular fa-pen-to-square mx-1" onClick={() => { props.update(props.value) }} ></i>
            </td>

        </>
    )
}

export default TutorialListItem