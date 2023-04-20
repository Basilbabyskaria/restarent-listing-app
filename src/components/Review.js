import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function Review({rev}) {
    console.log(rev);
  return (
    <div>
    <Accordion className='mt-3'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        <p className='mt-3'>{rev.name} <span className='ms-5 text-white'>Rating : {rev.rating}</span>   <span style={{marginLeft:'600px'}} className=' text-secondary'>{rev.date}</span></p>
        </Accordion.Header>
        <Accordion.Body>
          {/* <Accordion.Subtitle>{rev.date}</Accordion.Subtitle>  */}
          <h5>Rating : {rev.rating}</h5>
          {rev.comments}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
       
  )
}

export default Review