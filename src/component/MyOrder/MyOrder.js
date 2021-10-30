import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(() => {
        fetch('https://serene-shore-87572.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted])
    const bookings = orders?.filter(order => order.cEmail === user.email);


    // Delete My Bookings
    const handleDelete = (id) => {
        fetch(`https://serene-shore-87572.herokuapp.com/deleteBooking/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        }).then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    setIsDeleted(true)
                } else {
                    setIsDeleted(false)
                }
            })
    }

    return (
        <div className="table-responsive py-5">
            <h1 className="">My Orders</h1>
            <table className="table table-striped table-bordered table-hover">
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
                        bookings.map(booking => <tr key={booking._id}>
                            <th scope="row">{booking._id}</th>
                            <td>{booking.cName}</td>
                            <td>{booking.cEmail}</td>
                            <td>{booking.cPhone}</td>
                            <td>{booking.pTitle}</td>
                            <td>{booking.pDuration}</td>
                            <td>{booking.pLocation}</td>
                            <td>{booking.pCost}</td>
                            <td>{booking.status}</td>
                            <td><button onClick={() => handleDelete(booking._id)} className="btn btn-danger">Cancel Book</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;