// import React from 'react';
import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar expand = "lg">
                    <Navbar.Brand href="/">COMSOC</Navbar.Brand>
                    <Navbar.Toggle aria-controls = "basic-navbar-nav"/> 
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className = "ml-auto">
                            <Nav.Item><Nav.Link href="/shop"> SHOP </Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/about"> ABOUT </Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/contact"> CONTACT </Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/checkout"> Cart: {this.props.addedItems.length} </Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        addedItems: state.addedItems
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);