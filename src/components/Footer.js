import React from 'react'
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import './css/Footer.css'
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineGooglePlus } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row md={4}>
          <Col className="h1-txt" >
            <h1 className="h1"> GS COMPUTER</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada fringilla sem, à dictum lectus ultricies quis. Etiam eu bibendum orci. Aliquam erat volutpat. PLUS SUR NOUS    MORE ABOUT US
          </Col>
          <Col xs={4} className="h1-txt">
            <h5 className="h5"> Prestations de service</h5>
            Developpement Web
            Mobile
            Vente PC
            Vente Mobile
            Accessoires
            Applications de Gestion</Col>
          <Col md={2} className="h1-txt">
            <h5 className="h5"> Abonnez vous à notre newsletter</h5>
            Recevez nos dernières offres et mises à jour.
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button className="btn" type="submit">
              Submit
            </Button>
          </Col>
          <Col className="h1-txt">
            <h5 className="h5"> Nous contacter</h5>
             <ImLocation/> Gabes Gabes center num 116 Tunisie <br/>
            <BsTelephoneFill/> (+216)24360762 <br/>
            <MdEmail/> Stechnopc@yahoo.fr <br/><br/>
            <TiSocialFacebook className="social" size="2"/>
            <TiSocialLinkedin className="social" size="2"/>
            <TiSocialTwitter className="social" size="2"/>
            <AiOutlineGooglePlus className="social" size="2"/>


          </Col>
        </Row>
      </Container>
    </div>
  )
}
