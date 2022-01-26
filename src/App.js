import React from 'react'

import './App.css'
 import Navbar1 from './components/Navbar'
import Navbar2 from './components/Navbar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Body from './components/Body'
import Navbar3 from './components/Navbar3'

import Sidebar from './components/Sidebar'
export default function App()  {
 

    return (
     <div id="menu"  className="cont">
  
  <div className='head'> {/* <Navbar3 /> */}  <Navbar1 /></div> 
 <div className='nav1'><Navbar2/></div>
  <div className='side sidebar'><Sidebar name="Categories" /><Sidebar name="Brands" /> <Sidebar name="Price" /></div>
  <Body/>        
  <div  className="footer"><Footer/>  </div> 
        
     </div>
    )
  }

