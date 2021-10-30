import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const bookings = orders?.filter(order => order.cEmail === user.email);

    return (
        <div className="py-5">
            <h1 className="">My Orders</h1>
            <table class="table table-striped">
                <thead>
                    <tr className="border">
                        <th scope="col">ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Customer Phone</th>
                        <th scope="col">Package</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <tr>
                            <th scope="row">{booking._id}</th>
                            <td>{booking.cName}</td>
                            <td>{booking.cEmail}</td>
                            <td>{booking.cPhone}</td>
                            <td>{booking.pTitle}</td>
                            <td>{booking.pDuration}</td>
                            <td>{booking.pLocation}</td>
                            <td>{booking.pCost}</td>
                            <td>{booking.status}</td>
                            <td><button className="btn btn-warning">Cancel Book</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;