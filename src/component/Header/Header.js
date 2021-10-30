import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="border border-secondary border-top-0 border-start-0 border-end-0 bg-dark text-light fs-5">
                <Container>
                    <div className="d-flex align-items-center justify-content-center">
                        <Navbar.Brand as={HashLink} to="/home">
                            <img
                                src={logo}
                                width="200px"
                                height="auto"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav.Link className="text-light" as={HashLink} to="/home">Home</Nav.Link>
                        {user.displayName &&
                            <>
                                <Nav.Link className="text-light" as={HashLink} to="/myOrder">My Orders</Nav.Link>
                                <Nav.Link className="text-light" as={HashLink} to="/manageAllOrders">Manage All Order</Nav.Link>

                                <span className="fw-bold text-warning"> {user.displayName} </span>
                            </>}
                        {
                            user.email ?
                                <button className="btn btn-sm btn-secondary ms-2" onClick={handleLogout}> Sign Out</button>
                                : <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>











            {/* <div className="header-items">
                <Link to="/home">Home</Link>
                <Link to="/book">Booking</Link>
                <Link to="/order">Order</Link>
                <Link to="/about">About</Link>
                {user.displayName && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={handleLogout}>Sign Out</button>
                        : <Link to="/login">LogIn</Link>
                }
            </div> */}
        </div>
    );
};

export default Header;