import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Buttons from '../Buttons/Buttons';
import { Link, animateScroll as scroll } from "react-scroll";
import './navbar.css'
import { useState } from 'react';

const MainNavbar = () => {


  return (
    <div className='navDiv'>
    <Navbar className='navbar' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
        <Nav.Link
    activeClass="active"
    href="#carousel"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Carousel</Nav.Link>
            <Nav.Link 
            activeClass="active"
            href="#services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            
            >Services</Nav.Link>
      
          </Nav>
      <Buttons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MainNavbar
