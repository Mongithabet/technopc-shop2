/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import './css/Card.css'
//import headphone from './img/headphone.png';
import {  FaShoppingCart } from "react-icons/fa";
import {  MdFavoriteBorder } from "react-icons/md";


import { Card } from 'react-bootstrap';
export default function Card1() {
  const [prodData, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch('https://api.npoint.io/701042c2b328ece866d2')
      
        const data = await response.json();

        var x = data._embedded.products
      
        
        var result = x.map(product => ({ id: product.id, name: product.name, price: product.price, image: product.image ,category:product.category.name  }

        ));
        setProducts(result)
     
        console.log(result)
      } catch (error) {
        console.error(error.message);
      }

    }
    fetchData();
  }, [])

  return (

    <div >

      {
        prodData.map((item) => (

          <Card  key={item.id}>
            <Card.Img className="img" variant="top"  src={require(`${item.image}`).default} width={200} height={180} />
         
            <Card.Body >
<MdFavoriteBorder className='favorite-icon'/>
              <Card.Title  className='cat'>{item.category}</Card.Title  >



              <Card.Text className='name'>
                {item.name}
              </Card.Text>
              <Card.Text>
            
    
              
                ${(item.price).toFixed(2)}<label className='card-shop'><FaShoppingCart className='svg-shop' /></label>
              </Card.Text>
            </Card.Body>
          </Card>))




      }

    </div>
  )


}
