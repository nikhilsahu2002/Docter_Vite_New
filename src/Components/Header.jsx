
import OwlCarousel from 'react-owl-carousel';
import CountUp from 'react-countup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css/animate.min.css';
import c1 from "../assets/img/carousel-1.jpg"
import c2 from "../assets/img/carousel-2.jpg"
import c3 from "../assets/img/carousel-3.jpg"

export default function Header() {
    return (
        <div>
            <div className="container-fluid header bg-primary p-0 mb-5">
                <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="display-4 text-white mb-5">Good Health Is The Root Of All Happiness</h1>
                        <div className="row g-4">
                            <div className="col-sm-4">
                                <div className="border-start border-light ps-4">
                                    <h2 className="text-white mb-1">
                                        <CountUp start={0} end={123} duration={3} />
                                    </h2>
                                    <p className="text-light mb-0">Expert Doctors</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="border-start border-light ps-4">
                                    <h2 className="text-white mb-1">
                                        <CountUp start={0} end={1234} duration={3} />
                                    </h2>
                                    <p className="text-light mb-0">Medical Staff</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="border-start border-light ps-4">
                                    <h2 className="text-white mb-1">
                                        <CountUp start={0} end={12345} duration={3} />
                                    </h2>
                                    <p className="text-light mb-0">Total Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <OwlCarousel className="header-carousel" items={1} loop autoplay>
                            <div className="owl-carousel-item position-relative">
                                <img className="img-fluid" src={c1} alt="Cardiology" />
                                <div className="owl-carousel-text">
                                    <h1 className="display-1 text-white mb-0">Cardiology</h1>
                                </div>
                            </div>
                            <div className="owl-carousel-item position-relative">
                                <img className="img-fluid" src={c2} alt="Neurology" />
                                <div className="owl-carousel-text">
                                    <h1 className="display-1 text-white mb-0">Neurology</h1>
                                </div>
                            </div>
                            <div className="owl-carousel-item position-relative">
                                <img className="img-fluid" src={c3} alt="Pulmonary" />
                                <div className="owl-carousel-text">
                                    <h1 className="display-1 text-white mb-0">Pulmonary</h1>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
