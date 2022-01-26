import React from 'react'
import './css/Navbar3.css'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {MdCached} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'
import en from'./img/eng.svg'

export default function Navbar3() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavDropdown title="USD" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">USD</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">EURO</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">TND</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"> <img className="svg" src={en} height="auto" width={20} alt="en" /> 
                            <NavDropdown title="English" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Francais</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Arabic</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>      
                        </Nav>
                        <Nav className='nav-item' >
                            <Nav.Link  href="#deets"><MdOutlineFavoriteBorder size={20}/> WISHLIST</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                           <MdCached size={20}/> COMPARE
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <BsFillPersonFill size={20}/> My Account
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
