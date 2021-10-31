import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://serene-shore-87572.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="bg-secondary py-5">
            <div className="container">
                <h1 className="bg-primary text-light fw-bold py-2 my-3">Read Our Blogs</h1>
                {(blogs.length !== 0) ? <Row xs={1} md={4} className="g-4">
                    {
                        blogs.map(blog => <Blog
                            key={blog._id}
                            blog={blog}
                        ></Blog>)
                    }
                </Row> : <Spinner animation="border" variant="danger" />}
            </div>
        </div>
    );
};

export default Blogs;