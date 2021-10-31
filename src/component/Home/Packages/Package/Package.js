import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTags } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Package = ({ sPackage }) => {
    const duration = <FontAwesomeIcon icon={faClock} />
    const priceTag = <FontAwesomeIcon icon={faTags} />
    const { _id, pThumbnail, pTitle, pDuration, pDescription, pCost } = sPackage;
    return (
        <div className="text-start">
            <Col>
                <Card className="pb-2">
                    <Card.Img className="hover-zoom" variant="top" src={pThumbnail} />
                    <Card.Body>
                        <Card.Title className="text-primary fs-2">{pTitle}</Card.Title>
                        <p className="text-secondary fs-6">{duration} {pDuration}</p>
                        <Card.Text>
                            {pDescription.slice(0, 150)}
                        </Card.Text>
                    </Card.Body>
                    <div className="d-flex justify-content-between align-items-center px-2">
                        <Link to={`/bookPackage/${_id}`}>
                            <button className="btn btn-primary fw-bold">Book Now!</button>
                        </Link>
                        <span className="text-secondary">{priceTag} <span className="text-primary fw-bold fs-5 ms-1">{pCost}</span></span>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Package;