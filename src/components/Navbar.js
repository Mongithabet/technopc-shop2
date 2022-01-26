import React, { Component } from "react";
import './css/Navbar.css';
import { Container, Navbar } from 'react-bootstrap';
import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
class Navbar1 extends Component {

  render() {
    return (
      <div className="">


        <Navbar className="orange ">
          <Container className="orange">
            <Navbar.Brand href="#home">

              <h1 className="title">Technopc</h1>
              <form className="form-wrapper cf">
  	<input  type="text" placeholder="Search here..." required/>
	  <button type="submit">Search</button>
</form>
              <FaPhoneAlt className="icon" />
            </Navbar.Brand><p className="helpline">Tel:(+216)24360762</p><FaShoppingCart className="shopping" />
            <p className="shop">$17.500</p>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Navbar1;