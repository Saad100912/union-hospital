import React from "react";
import logo1 from "../../../images/company-logo/logo-1.png";
import logo2 from "../../../images/company-logo/logo-2.png";

const Testimonials = () => {
    return (
        <div className="container pb-5">
            <h1 className="text-center">Testimonials</h1>
            <div className="row g-5">
                <div className="col-12 col-md-6 text-center">
                    <img src={logo1} alt="" />
                    <p>
                        A complete, advanced and friendly hospital and medical
                        services provider. Their qualified workforce and quality
                        equipment give best result for any treatment like an
                        international service
                    </p>
                    <small>
                        <b>Delbert Henry</b>
                    </small>
                    <br />
                    <small>Softcom International</small>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src={logo2} alt="" />
                    <p>
                        Union Hospital provides the best medical services. They
                        have most advanced medical equipment to diagnosis any
                        type of disease. I am so satisfied for their customer
                        support
                    </p>
                    <small>
                        <b>Ailene Sampson</b>
                    </small>
                    <br />
                    <small>La Forme Fashion</small>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
