import React  from 'react'
import { useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Review from './Review';
import Fade from 'react-bootstrap/Fade';

function Viewrest() {
  const urlparams=useParams();
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
   const viewrest =Resturent.find(item=>item.id==urlparams.id)
  return (
    <div>
      {
        viewrest?(
          <Row className='mt-3'>
          <Col md={3}>
            <Image src={viewrest.photograph} fluid />
          </Col>
          <Col md={8}>
          <h1>{viewrest.name}</h1>
          <ListGroup>
      <ListGroup.Item>id:{viewrest.id}</ListGroup.Item>
      <ListGroup.Item variant="light">name:{viewrest.name}</ListGroup.Item>
      <ListGroup.Item action variant="light">address:{viewrest.address}</ListGroup.Item>
      <ListGroup.Item action variant="light">neighborhood:{viewrest.neighborhood}</ListGroup.Item>
      </ListGroup>
      <Restop op={viewrest.operating_hours}/>
      <Review rev={viewrest.reviews}/>
      <Button variant='dark' className='mt-3'
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}>
        Reviews
      </Button>

      <Fade in={open}>
        <div id="example-fade-text">
        {
        viewrest.reviews.map(item=>(
        <Review rev={item}/>
        ))
      }
        </div>
      </Fade>

      
    
          </Col>
        </Row>
        ):'null'
        
      
      }
    </div>
  )
}

export default Viewrest