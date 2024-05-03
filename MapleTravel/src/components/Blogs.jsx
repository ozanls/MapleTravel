import React from 'react';
import BlogTile from '../components/BlogTile'
import data from '../data.js'

export default function Blogs() {
    const blogTileArray = data.map(blog =>
        <BlogTile
            key={blog.id}
            {...blog}
        />)

    return (
        <>
            <section className="blogs">
            <h1 className="blogs--title">Blogs</h1>
            <div className="blogtiles-list">
                {blogTileArray}
                </div>
            </section>
        </>
    )
}