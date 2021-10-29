import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from './Package/Package';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

const Packages = () => {
    const direction = <FontAwesomeIcon icon={faArrowAltCircleDown} />

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className="container my-5">
            <h1 className="bg-success text-light fw-bold py-2">Most Popular Packages {direction}</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    packages.map(sPackage => <Package
                        key={sPackage._id}
                        sPackage={sPackage}
                    ></Package>)
                }
            </Row>
        </div>
    );
};

export default Packages;