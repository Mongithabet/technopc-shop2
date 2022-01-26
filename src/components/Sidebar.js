import React from 'react'
import { Accordion,Dropdown } from 'react-bootstrap';
import '../components/css/Sidebar.css'
export default function Sidebar(props) {


    return (<div>  
        <hr style={{background:'white'}}></hr> 
        <div className='content'>
       
          <Accordion className='accordion' >
          <Accordion.Item  eventKey="0">
    <Accordion.Header  >{props.name}</Accordion.Header>
    <Accordion.Body  >
    <Dropdown.Item href="#/action-1">Show All</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Headphones</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Laptops</Dropdown.Item>
    <Dropdown.Item href="#/action-4">Smart Phones</Dropdown.Item>
    <Dropdown.Item href="#/action-5">Cameras</Dropdown.Item>
    <Dropdown.Item href="#/action-6">Tv & Audio</Dropdown.Item>
    <Dropdown.Item href="#/action-7">Watches</Dropdown.Item>

    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
        </div></div>
    )
}
