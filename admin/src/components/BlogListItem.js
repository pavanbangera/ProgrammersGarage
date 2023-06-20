import React, { useContext } from 'react'
import BlogContext from '../context/Blog/BlogContext'

const BlogListItem = (props) => {
    const { deleteBlog } = useContext(BlogContext)
    return (
        <>

            <th scope="row">{props.value._id}</th>
            <td>{props.value.title}</td>
            <td>
                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteBlog(props.value._id) }}  ></i>
                <i className="fa-regular fa-pen-to-square mx-1" onClick={() => { props.update(props.value) }} ></i>
            </td>

        </>
    )
}

export default BlogListItem