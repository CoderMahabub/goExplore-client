import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateOrder = () => {
    const { orderId } = useParams();
    const [updateItem, setUpdateItem] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://serene-shore-87572.herokuapp.com/update/${orderId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast.success("Status Updated Successfully");
    };

    useEffect(() => {
        fetch(`https://serene-shore-87572.herokuapp.com/singleOrder/${orderId}`)
            .then(res => res.json())
            .then(data => setUpdateItem(data))
    }, [updateItem])
    return (
        <div className="py-5">
            <h1 className=""><b>Hi</b>, <span className="text-primary">{updateItem?.cName}</span></h1>
            <p>You are updating Booking Status for order package given bellow..</p>
            <div className="table-responsive">
                <table className="table table-bordered container mb-5">
                    <thead>
                        <tr className="bg-dark text-light">
                            <th scope="col">Customer Name</th>
                            <th scope="col">Package Name</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-secondary text-light">
                            <th scope="row">{updateItem?.cName}</th>
                            <td>{updateItem?.pTitle}</td>
                            <td>{updateItem?.pDuration}</td>
                            <td>{updateItem?.pLocation}</td>
                            <td className="bg-warning text-dark fw-bold">{updateItem?.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {(updateItem?.status) && <input className="px-2 py-1 fw-bold" defaultValue={updateItem?.status} {...register("status")} />}
                <input className="btn btn-success" type="submit" value="Update Status" />
            </form>
            <ToastContainer />
        </div >
    );
};

export default UpdateOrder;