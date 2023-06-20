import React, { useContext } from 'react'
import LessionContext from '../context/Lession/LessionContext'

const LessionListItem = (props) => {
    const { deleteLession } = useContext(LessionContext)

    return (
        <>

            <th scope="row">{props.value._id}</th>
            <td>{props.value.title}</td>
            <td>{props.value.link}</td>
            <td>
                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteLession(props.value._id) }} ></i>
                <i className="fa-regular fa-pen-to-square mx-1" onClick={() => { props.update(props.value) }}></i>
            </td>

        </>
    )
}

export default LessionListItem