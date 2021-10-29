import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideOne from '../../../images/banner1.jpg';
import slideTwo from '../../../images/banner2.jpg';
import slideThree from '../../../images/banner3.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Travel With Us For The Best Deal</h1>
                        <p>We are an Award Winning Travel Agent</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideTwo}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>We have 10 years of experience in this field.</h1>
                        <p>With more than 1000 employees across the globe.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideThree}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Travel With Us For The Best Deal</h1>
                        <p>We are an Award Winning Travel Agent</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;