import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Stack } from 'react-bootstrap';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Cart from "./Cart";




function NavigationBar({ navBarToShow }) {
    const user = JSON.parse(localStorage.getItem("user"));
    const [activeRegularUser, setActiveRegularUser] = useState(false);

    useEffect(() => {
        (user != null && user.role == "regular") ?
            setActiveRegularUser(true)
            :
            setActiveRegularUser(false)
    }, [user])

    return (
        <>
            <Navbar expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Stack direction="horizontal" gap={2}>
                        <Nav className="mr-auto">
                            {navBarToShow.map((t, index) => (
                                <Nav.Link
                                    as={Link}
                                    key={index}
                                    to={t.to}
                                >
                                    {t.icon}
                                    {t.displayName}
                                </Nav.Link>
                            ))}
                        </Nav>
                        {activeRegularUser && <Cart />}
                    </Stack>
                </Container>
            </Navbar>
        </>
    );
}



export default NavigationBar;









