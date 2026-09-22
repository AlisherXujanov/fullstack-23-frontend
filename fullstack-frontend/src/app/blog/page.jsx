"use client"

import Title from "@/components/Title";
import { useState, useEffect } from 'react'
import "./style.scss"



function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    async function getPosts() {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        setPosts(data)
    }

    return (
        <div className="blog-page page-container">
            <Title title='Blog Page' />
            <div className="posts">
                {
                    posts && posts.map((item, idx) => {
                        return (
                            <div className="post-item" key={'item' + idx}>
                                <h2>{item.title}</h2>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Blog;