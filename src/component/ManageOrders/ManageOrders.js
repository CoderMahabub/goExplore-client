import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="py-5">
            <h1 className="text-primary fw-bold pb-3"><u>Manage Orders</u><span className="fs-6 text-success">(<b>as Admin:</b> {user.displayName})</span></h1>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Customer Phone</th>
                        <th scope="col">Package</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(booking => <tr>
                            <th scope="row">{booking._id}</th>
                            <td>{booking.cName}</td>
                            <td>{booking.cEmail}</td>
                            <td>{booking.cPhone}</td>
                            <td>{booking.pTitle}</td>
                            <td>{booking.pDuration}</td>
                            <td>{booking.pLocation}</td>
                            <td>{booking.pCost}</td>
                            <td>{booking.status}</td>
                            <td>
                                <button className="btn btn-danger me-1">Cancel Book</button>
                                <button className="btn btn-warning">Update Status</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;