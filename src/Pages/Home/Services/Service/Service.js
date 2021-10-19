import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
    const { id, img, title, description } = service;
    const url = `service/${id}`;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title.toUpperCase()}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100)} ...........
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={url} className="see-more-btn">
                            Read more
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
