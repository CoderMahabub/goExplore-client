import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap';

const ManageOrders = () => {
    const cancel = <FontAwesomeIcon icon={faTrash} />
    const update = <FontAwesomeIcon icon={faEdit} />

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(() => {
        fetch('https://serene-shore-87572.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted])

    // Delete My Bookings
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this order?');
        if (proceed) {
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
    }
    return (
        <div className="py-5">
            <h1 className="text-primary fw-bold pb-3"><u>Manage Orders</u><span className="fs-6 text-success">(<b>as Admin:</b> {user?.displayName})</span></h1>
            {(orders.length !== 0) ? <div className="table-responsive"><table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
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
                        orders.map(booking => <tr
                            key={booking._id}>
                            <td scope="row">{booking?.cName}</td>
                            <td>{booking?.cEmail}</td>
                            <td>{booking?.cPhone}</td>
                            <td>{booking?.pTitle}</td>
                            <td>{booking?.pDuration}</td>
                            <td>{booking?.pLocation}</td>
                            <td>{booking?.pCost}</td>
                            <td>{booking?.status}</td>
                            <td>
                                <button onClick={() => handleDelete(booking?._id)} className="btn btn-danger me-1">{cancel}</button>
                                <Link to={`/update/${booking?._id}`}>
                                    <button className="btn btn-warning">{update} Change Status</button>
                                </Link>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div> : <Spinner animation="border" variant="info" />}
        </div>
    );
};

export default ManageOrders;