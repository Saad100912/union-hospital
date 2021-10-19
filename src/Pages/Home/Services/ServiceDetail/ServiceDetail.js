import React from "react";
import { useParams } from "react-router";
import useService from "../../../../hooks/useService";
import useServices from "../../../../hooks/useServices";
import ServiceLink from "./ServiceLink";
import serviceHospitalImg from "../../../../images/hospital-1.jpg";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const servicesInDetail = useServices();
    const serviceInfo = useService(serviceId);
    const { title, description, img } = serviceInfo;
    console.log(servicesInDetail);

    return (
        <div>
            <div>
                <img
                    className="img-fluid"
                    src={serviceHospitalImg}
                    alt="an img"
                />
            </div>
            <div className="container">
                <div className="row gx-5 my-5">
                    <div className="col-12 col-md-9">
                        <h1 className="pb-3">{title}</h1>
                        <img className="img-fluid" src={img} alt="" />
                        <br />
                        <br />
                        <p>{description}</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h2>Other services:</h2>
                        <ul>
                            {servicesInDetail.map((service) => (
                                <ServiceLink
                                    key={service.id}
                                    service={service}
                                ></ServiceLink>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
