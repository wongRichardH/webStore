import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        /* background-color: #222; */
        background-color: #white; 
    }

    .navlink&:hover {
            background-color: blue;
            color: white;
    }

    /* .navbar-text {
        color:red;
    } */
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand = "lg">
            <Navbar.Brand href="/">COMSOC</Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item><Nav.Link href="/"> Home </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/"> Shop </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about"> About </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact"> Contact </Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)