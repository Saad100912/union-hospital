import React from "react";
import { Link } from "react-router-dom";

const ServiceLink = ({ service }) => {
    const { id, title } = service;
    return (
        <li>
            {/* This link is working after page reload. I don't know the solution to this */}
            <Link key={id} to={`/service/${id}`}>
                {title}
            </Link>
        </li>
    );
};

export default ServiceLink;
