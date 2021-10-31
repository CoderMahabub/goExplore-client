import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="news-letter container">
            <div className="mx-auto">
                <h2 className="fw-bold fs-1 text-primary">Subscribe Our Newsletter</h2>
                <p>If you want to know latest Tour Packages, Don't forget to Subscribe</p>
                <div className="">
                    <input className="py-1 px-3" type="email" placeholder="Your Email" />
                    <input className="btn btn-success" type="submit" value="Subscribe" />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;