import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddPackge.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const AddPackage = () => {
    const cancel = <FontAwesomeIcon icon={faTrash} />
    const [packages, setPackages] = useState([]);
    // const [isDeleted, setIsDeleted] = useState(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Post Packages to MongoDB
    const onSubmit = data => {
        fetch(`https://serene-shore-87572.herokuapp.com/packages`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => console.log(result))
        toast.success("Package added successfully", {
            position: "top-right"
        });
        reset();
    };

    // Load Packages from MongoDB
    useEffect(() => {
        fetch('https://serene-shore-87572.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    // Delete Single package from MongoDB (For Safety Purpose Comment Out Package Delete Code!)
    const handleDelete = id => {
        // const proceed = window.confirm('Are you sure, You want to Delete the Package?');
        // if (proceed) {
        //     fetch(`https://serene-shore-87572.herokuapp.com/deletePackage/${id}`, {
        //         method: 'DELETE',
        //         headers: { 'content-type': 'application/json' },
        //     }).then(res => res.json())
        //         .then(result => {
        //             if (result.deletedCount) {
        //                 toast.warn("Deleted Successfully");
        //                 setIsDeleted(true);
        //             } else {
        //                 setIsDeleted(false);
        //             }
        //         })
        // }
        toast.warn("Commented out DELETE codes for SAFETY purpose!", {
            position: "top-right"
        });

    }

    return (
        <>
            <div className="mb-5 bg-success py-5">
                <div className="container border p-3">
                    <h1 className="text-light fw-bold"><u>Add a new package</u></h1>
                    <form className="py-2" onSubmit={handleSubmit(onSubmit)}>
                        <input className="my-1 py-2 px-3 w-100 rounded" placeholder="Package Title | example: (Rome City Tou)" {...register("pTitle", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Package Duration | example: (01 Nov 2021 - 08 Nov 2021)" {...register("pDuration", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Package Description | example: (Take a Rome hop-on hop-off tour ..... )" {...register("pDescription", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Package Cost | example: ($6,750)" {...register("pCost", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Package Destination | example: (Italy)" {...register("pLocation", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Package Thumbnail | example: (https://i.ibb.co/W6sy9zN/Rome-City-Tour.jpg)" {...register("pThumbnail", { required: true })} /> <br />

                        <input type="number" className="my-1 py-1 px-3 w-100 rounded" placeholder="Available Package | example: (152)" {...register("pSeats", { required: true })} /> <br />

                        {(errors.pTitle || errors.pDuration || errors.pDescription || errors.pCost || errors.pLocation || errors.pThumbnail || errors.pSeats) && <p className="fw-bold text-danger my-1 fs-6">Be Carefully!, All the field are required.</p>}
                        <br />
                        <input className="btn btn-lg btn-light rounded" type="submit" value="Add Package" />
                    </form>
                    <ToastContainer />
                </div>
            </div>
            <div className="packages my-5">
                <h1 className="text-success fw-bold my-4"><u>Manage Existing Packages</u></h1>

                {(packages.length !== 0) ? <Container className="border border-dark">
                    <Row className="bg-dark text-info fw-bold">
                        <Col className="single-column lgOne border p-1">Package</Col>
                        <Col className="single-column lgOne border p-1">Duration</Col>
                        <Col className="single-column lgOne border p-1">Photo Link</Col>
                        <Col className="single-column smallOne border p-1">Price</Col>
                        <Col className="single-column smallOne border p-1">Destination</Col>
                        <Col className="single-column smallOne border p-1">Available</Col>
                        <Col className="single-column smallOne border p-1">Action</Col>
                    </Row>
                    {
                        packages.map(sPackage => <Row
                            key={sPackage._id}
                            className="bg-secondary text-light"
                        ><Col className="single-column lgOne border p-1">{sPackage.pTitle}</Col>
                            <Col className="single-column lgOne border p-1">{sPackage.pDuration}</Col>
                            <Col className="single-column lgOne border p-1">{sPackage.pThumbnail}</Col>
                            <Col className="single-column smallOne border p-1">{sPackage.pCost}</Col>
                            <Col className="single-column smallOne border p-1">{sPackage.pLocation}</Col>
                            <Col className="single-column smallOne border p-1">{sPackage.pSeats}</Col>
                            <Col className="single-column smallOne border p-1"><button onClick={() => handleDelete(sPackage._id)} className="btn btn-warning">{cancel}</button></Col>
                        </Row>)
                    }
                </Container> : <Spinner animation="border" variant="success" />}
            </div>
        </>
    );
};

export default AddPackage;