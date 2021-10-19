import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";

const Banner = () => {
    return (
        <div className="banner-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-info">
                        <h1>
                            High quality, Appropriate and Accessible medical
                            care
                        </h1>
                        <h6>We aim to deliver for all of our patients</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-info">
                        <h1>
                            The art of our medical service amuses the patient
                        </h1>
                        <h6>
                            while our technology identifies the disease sharply
                        </h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-info">
                        <h1>The Trusted and friendly medical professional</h1>
                        <h6>
                            for every patient of all branches over the country
                        </h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
