import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = (props) => {
    const { id, img, title, description } = props.blog;
    const url = `/blog/${id}`;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description.slice(0, 100)}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={url} className="btn btn-success">
                            Read more
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Blog;
