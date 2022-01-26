import React from 'react'
import Card1 from './Card'
import '../components/css/Body.css'
import {BiSearchAlt2} from "react-icons/bi";

export default function Body() {
    
    return (
        <div className="body">
          
            <div className='inseatch'><div className="form__group field">
  <input type="input" className="form__field" placeholder="Search product" name="Search product" id='name' required />
  <label htmlFor="name" className="form__label">Search product</label>
</div></div>
            <div className='box'><BiSearchAlt2 className='bicon'/></div>
            
         <Card1/>
          </div>
    )
}
