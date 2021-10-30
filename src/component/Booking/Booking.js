import React from 'react';
import { useParams } from 'react-router';
import usePackages from '../../hooks/usePackages';

const Booking = () => {
    const { _id } = useParams();
    const [packages] = usePackages();
    const singlePackage = packages?.find(pkg => pkg._id === _id);

    return (
        <div>
            <h1>{singlePackage.pTitle}</h1>
        </div>
    );
};

export default Booking;