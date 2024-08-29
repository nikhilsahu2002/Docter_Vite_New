import t1 from "../assets/img/testimonial-1.jpg"
import t2 from "../assets/img/testimonial-2.jpg"
import t3 from "../assets/img/testimonial-3.jpg"

export default function Testimonial() {
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
                        <h1>What Say Our Patients!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item text-center">
                            <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={t1} style={{ width: "100px", height: "100px" }} />
                            <div className="testimonial-text rounded text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Patient Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={t2} style={{ width: "100px", height: "100px" }} />
                            <div className="testimonial-text rounded text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Patient Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={t3} style={{ width: "100px", height: "100px" }} />
                            <div className="testimonial-text rounded text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Patient Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
