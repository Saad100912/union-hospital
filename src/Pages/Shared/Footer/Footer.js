import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4>Contact Us</h4>
                        <small>
                            House#55, Road##, City Name, District-####, Country
                            Name
                        </small>
                        <br />
                        <small>Phone: 123456789, 987654321</small>
                        <br />
                        <small>Email: info@unionhospital.com</small>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4>Important Links</h4>
                        <small>
                            <a href="#">Union Pharmaceuticals</a>
                        </small>
                        <br />
                        <small>
                            <a href="#">Union Medical College</a>
                        </small>
                        <br />
                        <small>
                            <a href="#">Union Medical College Hospital</a>
                        </small>
                        <br />
                        <small>
                            <a href="#">Management Team</a>
                        </small>
                        <br />
                        <small>
                            <a href="#">Career</a>
                        </small>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4>Quick Links</h4>
                        <small>
                            <a href="#">Our Services</a>
                        </small>
                        <br />
                        <small>
                            <a href="#">Our Branches</a>
                        </small>
                        <br />
                        <small>
                            <a href="#">Call for Appointments</a>
                        </small>
                        <br />
                        <small>
                            <a href="#">Find Doctors</a>
                        </small>
                        <br />
                        <small>
                            <a href="#">Gallery</a>
                        </small>
                    </div>
                </div>
                <p className="text-center text-secondary mt-3 mb-0">
                    <small>All rights reserved, 2022 Union Hospital</small>
                </p>
            </div>
        </div>
    );
};

export default Footer;
