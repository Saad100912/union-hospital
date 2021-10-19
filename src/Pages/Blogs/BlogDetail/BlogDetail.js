import React from "react";
import { useParams } from "react-router";
import useBlog from "./../../../hooks/useBlog";
import blogDetailBanner from "../../../images/hospital.jpg";

const BlogDetail = () => {
    const { blogId } = useParams();
    const blogInfo = useBlog(blogId);
    const { img, title, description } = blogInfo;
    return (
        <div>
            <div>
                <img className="img-fluid" src={blogDetailBanner} alt="" />
            </div>
            <div className="container">
                <div className="row mt-5 ">
                    <div className="col-12 col-md-9 gx-5">
                        <img className="img-fluid" src={img} alt="" />
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="row container">
                            <div className="col-6">
                                <img
                                    className="img-fluid"
                                    src="https://previews.123rf.com/images/sergeyvasutin/sergeyvasutin1707/sergeyvasutin170700057/82830951-vector-illustration-square-flat-medical-icon-emergency-ambulance-vehicle.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-6">
                                <p>
                                    Emergency?
                                    <br /> Call Ambulance
                                </p>
                                <h6>+123456789</h6>
                            </div>
                        </div>
                        <div>
                            <h6>Contact address</h6>
                            <p>
                                <small>
                                    Plot-#, Road ##, City, District-####,
                                    Country
                                </small>
                                <br />
                                <small>Tel: +1234567989, +987654321</small>
                                <br />
                                <small>Fax: +567891234</small>
                                <br />
                                <small>Email: contact@unionhospital.com</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
