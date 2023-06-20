import React, { useState } from 'react'
import BlogContext from './BlogContext'

const BlogState = (props) => {
    const [getBlog, setBlog] = useState([])
    const [blogCount, setBlogCount] = useState("0")


    const addBlog = async (title, content) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/blog/addBlog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content })
        })
        const json = await response.json()
        setBlog(getBlog.concat(json))
    }
    const get = async (e) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/blog/getBlog`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const json = await response.json()
        setBlog(json)
    }

    const deleteBlog = async (id) => {
        await fetch(`${process.env.REACT_APP_API}/api/blog/deleteBlog/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },

        });
        setBlog(getBlog.filter((item) => { return item._id !== id }))
    }

    const editBlog = async (id, title, content) => {
        await fetch(`${process.env.REACT_APP_API}/api/blog/updateBlog/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),

        });


        const NewItem = JSON.parse(JSON.stringify(getBlog))
        for (let index = 0; index < getBlog.length; index++) {
            const element = NewItem[index];
            if (element._id === id) {
                NewItem[index].title = title;
                NewItem[index].content = content;
                break;
            }

        }
        setBlog(NewItem)
    }

    const countBlog = async () => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/blog/countBlog`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        });
        const json = await response.json()
        setBlogCount(json.toString())

    }

    return (
        <BlogContext.Provider value={{ addBlog, get, getBlog, deleteBlog, editBlog, countBlog, blogCount }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState