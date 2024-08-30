import { useState } from 'react';

export default function Nav() {
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    const handleNavClick = (path) => {
        setActiveLink(path);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
            <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h1 className="m-0 text-primary"><i className="far fa-hospital me-3"></i>Klinik</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a
                        href="/"
                        className={`nav-item nav-link ${activeLink === '/' ? 'active' : ''}`}
                        onClick={() => handleNavClick('/')}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className={`nav-item nav-link ${activeLink === '/about' ? 'active' : ''}`}
                        onClick={() => handleNavClick('/about')}
                    >
                        About
                    </a>
                    <a
                        href="/service"
                        className={`nav-item nav-link ${activeLink === '/service' ? 'active' : ''}`}
                        onClick={() => handleNavClick('/service')}
                    >
                        Service
                    </a>
                </div>
                <a
                    href="/appointment"
                    className={`btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block ${activeLink === '/appointment' ? 'active' : ''}`}
                    onClick={() => handleNavClick('/appointment')}
                >
                    Appointment<i className="fa fa-arrow-right ms-3"></i>
                </a>
            </div>
        </nav>
    );
}
