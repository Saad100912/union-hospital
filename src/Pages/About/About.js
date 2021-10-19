import React from "react";

const About = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center my-5">About Us</h1>
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1607799013470-8a46c0db7eb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"
                        alt=""
                    />
                </div>
                <div className="col-12 col-md-6">
                    <h2>
                        <span className="text-secondary">Who</span> We Are
                    </h2>
                    <p>
                        Opening its doors in August 2006 and situated beside the
                        picturesque Gulshan Lake, this hospital is one of the
                        largest private sector healthcare facilities in
                        Bangladesh. United Hospital has the capacity to house
                        over 500 patients and has 12 state of the art operation
                        theatres to cater to the needs of varied patient base.
                    </p>
                    <p>
                        With more than 30 clinical sub specialties, our centres
                        of Excellence like Cardiac, Cancer, Renal, Surgical,
                        Neuroscience, Mother and Child Health and Critical Care
                        Centres are staffed by the most esteemed doctors in
                        their respective fields.
                    </p>
                    <p>
                        Since inception till date (July 2021) we have conducted
                        420,000 Cardiac Investigations, 55,000 Cardiac
                        Procedures, 14,000 Heart Surgeries with 98% success
                        rate, 39 Kidney Transplant, 295,000 Haemodialysis,
                        185,000 Radiation Therapy Sessions and 196,000 Health
                        Checkups completed.
                    </p>
                    <p>
                        At Union Hospital, providing our patients with a trusted
                        and compassionate environment for healthcare is central
                        to our mission. We draw strength from our purpose, which
                        is above all to help and to heal. Our physicians, nurses
                        and other caregivers and supporting staff are passionate
                        about providing the right care at the right time,
                        bringing hope and healing to our patients and their
                        families. Patients trust us with their most valuable
                        possession – their lives - and all of our caregivers
                        recognize the immense responsibility that comes with
                        that trust.
                    </p>
                </div>
            </div>
            <div className="row g-4 my-5">
                <div className="col-12 col-md-6">
                    <h3>Our objectives</h3>
                    <ul>
                        <li>
                            To render the world standard diagnostic service to
                            the people of the country at an affordable cost and
                            in turn to limit the outflow of the patient abroad
                            at the expense of heard earn foreign currency by
                            providing quality diagnostic services.
                        </li>
                        <li>
                            Out door basis treatment by renowned General
                            Practitioners, Consultants and Professors in
                            different medical fields.
                        </li>
                        <li>
                            To promote Health Education and Medical Services.
                        </li>
                        <li>
                            Day care Centre for follow-up cardiac renal and
                            oncology patients.
                        </li>
                        <li>
                            To build a full fledged specialized (Tertiary)
                            Hospital.
                        </li>
                        <li>Set up Satellite collection Centre.</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <img
                        className="img-fluid"
                        src="https://media.istockphoto.com/photos/vigilantly-monitoring-his-patients-vitals-picture-id592647720"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
