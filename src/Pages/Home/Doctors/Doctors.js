import React from "react";
import doctor1 from "../../../images/doctors/doctor-1.jpg";
import doctor2 from "../../../images/doctors/doctor-2.jpg";
import doctor3 from "../../../images/doctors/doctor-3.jpg";
import doctor4 from "../../../images/doctors/doctor-4.jpg";
import "./Doctors.css";

const Doctors = () => {
    return (
        <div className="container doctors-section">
            <h1 className="text-center">Meet our doctors</h1>
            <div className="row g-4 my-5 doctors-container">
                <div className="col-12 col-md-6">
                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <img className="img-fluid" src={doctor1} alt="" />
                        </div>
                        <div className="col-12 col-md-8">
                            <h5>Phillips William</h5>
                            <p>MBBS, FCPS, DCH (Dublin), MRCP (Dublin)</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <img className="img-fluid" src={doctor2} alt="" />
                        </div>
                        <div className="col-12 col-md-8">
                            <h5>John Smith</h5>
                            <p>
                                FRCS (England), FRCS (Glasgow), FRCS
                                (Edinburgh), FRCS (General), MSc (Leeds), MBBS
                                (DMC)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <img className="img-fluid" src={doctor3} alt="" />
                        </div>
                        <div className="col-12 col-md-8">
                            <h5>Amelia Johnson</h5>
                            <p>
                                MBBS, FCPS (Obstetrics and Gynaecology), FCPS
                                (Gynaecological Oncology)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <img className="img-fluid" src={doctor4} alt="" />
                        </div>
                        <div className="col-12 col-md-8">
                            <h5>kristen stewart</h5>
                            <p>
                                MBBS, MCPS (Obstetrics and Gynaecology), MS
                                (Obstetrics and Gynaecology)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="see-more-btn text-center">See more</button>
        </div>
    );
};

export default Doctors;
