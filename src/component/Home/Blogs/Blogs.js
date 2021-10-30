import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="bg-secondary py-5">
            <div className="container">
                <h1 className="bg-primary text-light fw-bold py-2 my-3">Read Our Blogs</h1>
                <Row xs={1} md={4} className="g-4">
                    {
                        blogs.map(blog => <Blog
                            key={blog._id}
                            blog={blog}
                        ></Blog>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Blogs;