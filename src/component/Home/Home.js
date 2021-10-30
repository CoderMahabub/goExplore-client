import React from 'react';
import Blogs from './Blogs/Blogs';
import NewsLetter from './NewsLetter/NewsLetter';
import Packages from './Packages/Packages';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Packages></Packages>
            <Blogs></Blogs>
            <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;