import React, { useState } from 'react';
import { useParams } from 'react-router';
import usePackages from '../../hooks/usePackages';
import { useForm } from "react-hook-form";
import './Booking.css';
import useAuth from '../../hooks//useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Booking = () => {
    const { _id } = useParams();
    const [packages] = usePackages();
    const singlePackage = packages?.find(pkg => pkg._id === _id);
    const { user } = useAuth();

    // React Hook Form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://serene-shore-87572.herokuapp.com/addOrders`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        reset();
        toast.success("Booking Done Successfully", {
            position: "top-right"
        });

    };

    return (
        <div className="container booking py-5">
            <h1 className="text-primary fw-bold">Book Tour Package</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row>
                        <Col className="border p-3">
                            {(packages.length !== 0) &&
                                <div>
                                    <h2 className="text-success pb-2"><u>Package Detail</u></h2>
                                    <label htmlFor="pTitle">Package: </label>
                                    <input defaultValue={singlePackage?.pTitle} {...register("pTitle")} id="pTitle" />
                                    <br />
                                    <label htmlFor="pDuration">Duration: </label>
                                    <input defaultValue={singlePackage?.pDuration} {...register("pDuration")} id="pDuration" />

                                    <br />
                                    <label htmlFor="pCost">Payable : </label>
                                    <input defaultValue={singlePackage?.pCost} {...register("pCost")} id="pCost" />
                                    <br />
                                    <label htmlFor="pLocation">Location : </label>
                                    <input defaultValue={singlePackage?.pLocation} {...register("pLocation")} id="pLocation" />
                                </div>
                            }
                        </Col>
                        <Col className="border p-3">
                            <h2 className="text-success pb-2"><u>Customer Detail</u></h2>
                            <label htmlFor="cName">Customer Name: </label>
                            <input defaultValue={user?.displayName} {...register("cName")} id="cName" />
                            <br />
                            <label htmlFor="cEmail">Customer Email : </label>
                            <input defaultValue={user?.email} {...register("cEmail")} id="cEmail" />

                            <br />
                            <label htmlFor="cPhone">Customer Phone: </label>
                            <input placeholder="Phone Number" {...register("cPhone", { required: true })} id="cPhone" />

                            <br />
                            <label htmlFor="cAddress">Customer Adress: </label>
                            <input placeholder="Please Type Your Address" {...register("cAddress", { required: true })} id="cAddress" />
                        </Col>
                    </Row>
                </Container>
                {(errors.cPhone || errors.cAddress) && <span className="text-danger fw-bold fs-5">All the fields are required!</span>} <br />
                <br />
                <div className="hidden-field">
                    <input defaultValue="Pending" {...register("status")} />
                </div>
                <input className="btn btn-lg btn-success text-light" type="submit" value="Click to Book" />
            </form>
            <ToastContainer />
        </div>
    );

};

export default Booking;