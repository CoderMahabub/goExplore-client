import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const signIn = <FontAwesomeIcon icon={faSignInAlt} />
    const signOut = <FontAwesomeIcon icon={faSignOutAlt} />

    const { user, handleLogout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="border border-secondary border-top-0 border-start-0 border-end-0 bg-dark text-light">
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
                        {user.displayName && <>
                            <Nav.Link className="text-light" as={HashLink} to="/myOrder">My Orders</Nav.Link>
                            <Nav.Link className="text-light" as={HashLink} to="/manageAllOrders">Manage All Orders</Nav.Link>
                            <Nav.Link className="text-light" as={HashLink} to="/addPackage">Manage Packages</Nav.Link>
                        </>}
                        <Nav.Link className="text-light" as={HashLink} to="/contact">Contact</Nav.Link>
                        {user.displayName && <>
                            {(user.photoURL) && <img className="header-photo mx-2" src={user.photoURL} alt="user" />}
                            <span className="fw-bold text-warning"> {user.displayName} </span>
                        </>}

                        {user.email ?
                            <button className="btn btn-sm btn-light fw-bold ms-2" onClick={handleLogout}> Sign Out {signOut}</button>
                            : <Nav.Link as={HashLink} to="/login"><button className="btn btn-sm btn-light fw-bold">LogIn {signIn}</button></Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;