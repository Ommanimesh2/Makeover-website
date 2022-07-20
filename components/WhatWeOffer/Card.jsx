import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {AnimationOnScroll} from 'react-animation-on-scroll'
import './what-we-offer.css'

const CardGrid = () => {
  return (
    
<Row xs={2} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
        <AnimationOnScroll animateIn='swing-in-top-fwd'>
          <Card>
          <Card.Img variant="top" src="data:image/jpeg;base64,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" />
            <Card.Body className='card'>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </AnimationOnScroll>
        </Col>
      ))}
    </Row>

    
  )
}

export default CardGrid
