import React from "react";
import { Row } from "react-bootstrap";
import Blog from "../Blog/Blog";
import useBlogs from "./../../../hooks/useBlogs";

const Blogs = () => {
    const blogs = useBlogs();
    return (
        <div className="container">
            <h1 className="my-5">Blogs</h1>
            <Row xs={1} md={3} className="g-4">
                {blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog}></Blog>
                ))}
            </Row>
        </div>
    );
};

export default Blogs;
