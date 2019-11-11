import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';

const Styles = styled.div`
    .navbar {
        /* background-color: #222; */
        background-color: #white; 
    }

    .navlink&:hover {
            background-color: blue;
            color: white;
    }
`;

// const NavItemStyle = styled(Nav.Link)`
//     color: #blue;
//     font-size: 1em;
// `;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand = "lg">
            <Navbar.Brand href="/">COMSOC</Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/> 
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item><Nav.Link href="/shop"> SHOP </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about"> ABOUT </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact"> CONTACT </Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)