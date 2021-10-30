import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo-colored.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarked, faEnvelope, faTags } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const address = <FontAwesomeIcon icon={faMapMarked} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const mail = <FontAwesomeIcon icon={faEnvelope} />
    const tag = <FontAwesomeIcon icon={faTags} />

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://serene-shore-87572.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data.slice(0, 3)))
    }, [])

    return (
        <div className="bg-dark text-light text-start">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col sm={12} md={4} className="footer-left py-4 px-2">
                        <img className="img-fluid" src={logo} alt="logo" />
                        <p className="pe-3">goExplore is one of the renowned Tour Management Company around the world with best quality services in a cheap cost. We provide all the facilities which need to fulfill a tour with satisfaction and energy</p>
                    </Col>
                    <Col sm={12} md={4} className="py-4 px-2">
                        <h2 className="pb-2 text-success fw-bold"><u>Last Minute Deals</u></h2>
                        <div>
                            {
                                packages.map(pkg => <div key={pkg._id} className="d-flex justify-content-start my-3">
                                    <img className="footer-img me-3 border border-3 border-secondary" src={pkg.pThumbnail} alt="" />
                                    <div>
                                        <h5>{pkg.pTitle}</h5>
                                        <span className="text-primary">{tag} {pkg.pCost}</span>
                                    </div>
                                </div>)
                            }
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="py-4 px-2">
                        <h2 className="pb-2 text-success fw-bold"><u>Contact Info</u></h2>
                        <p><span className="text-primary">{address}</span> Road No. 12, Sector - 10, Dhaka 1230</p>
                        <p><span className="text-primary">{phone}</span> (+880) 1245652458</p>
                        <p><span className="text-primary">{mail}</span> contact@goExplore.com</p>
                    </Col>
                </Row>
                <hr className="border" />
                <p className="pb-3 text-center">Copyright © 2021 All Right Reserved, <Link className="text-success fs-5" to="/home">goExplore.</Link></p>
            </Container>
        </div>
    );
};

export default Footer;