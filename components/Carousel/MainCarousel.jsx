import React from 'react'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
const MainCarousel = () => {

  return (
    <AnimationOnScroll style={{marginTop:'15vh'}} animateIn='slide-in-fwd-left'
  >
    <div className='carousel' id="carousel">
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block carouselItem"
          src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselItem"
          src="https://media.istockphoto.com/photos/tractor-cultivating-field-at-spring-picture-id543212762?k=20&m=543212762&s=612x612&w=0&h=3x8yNlzSApOGoZyPZl4cx_ioPLAna-AXt8SvkildxRo="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselItem "
          src="https://media.istockphoto.com/photos/taking-care-of-the-crop-aerial-view-of-a-tractor-fertilizing-a-picture-id1154958041?k=20&m=1154958041&s=612x612&w=0&h=swgLn2K8QgSS_6-ihWSO2dEl1BurBqWFHA1rfbsL0P4=
          " alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </AnimationOnScroll>
  )
}

export default MainCarousel
