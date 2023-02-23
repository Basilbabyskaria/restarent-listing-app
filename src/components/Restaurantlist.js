import React, { useEffect, useState } from 'react'
import Restcard from './Restcard'
import Viewrest from './Viewrest'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
function Restaurantlist() {
  const [Resturent,setResturent]=useState([])
  const getResturent=async()=>{
    await fetch('/restaurants.json')
    .then((data)=>data.json()
      .then((result)=>setResturent(result.restaurants)
      )
    
   )
   
  }
  console.log(Resturent);

  useEffect(()=>{
    getResturent()
   },[])
  return (
      <Container>
      <Row>
        {
          Resturent.map(item=>(                          //not { is (  remember
            <Restcard res={item}/>
            // <h1>{item.name}</h1>

          ))
          }
        
      </Row>
      </Container>
  )
}

export default Restaurantlist