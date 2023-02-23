import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link} from 'react-router-dom';

function Restcard({res}) {
    // console.log(res);
    const style={
      height:'30rem',
      width:'15rem'
    }

  return (
    <Col>
      <Link to={`Viewrest/${res.id}`} style={{textDecoration:'none',color:'black'}}>    
        <Card className='mt-3 ' style={style}  sm={12} md={6} lg={4} xl={3}>
          <Card.Img className='p-2' variant="top" src={res.photograph} />
          <Card.Body>
            <Card.Title>{res.name}</Card.Title>
            <Card.Text>
             {res.neighborhood}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>

  )
}

export default Restcard