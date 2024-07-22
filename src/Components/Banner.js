import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import istockphoto1 from '../Assets/istockphoto-519526540-612x612.jpeg';
import istockphoto2 from '../Assets/istockphoto-1442417585-612x612.jpeg';
import pizza from '../Assets/pizza-5179939_640.jpeg';

const Banner = () => {
  return (
    <Container >
      <Row className='justify-content-center align-items-center'>
        <Col lg={8}>
          <Carousel className='justify-content-center'>
            <Carousel.Item interval={2000}>
              <img src={istockphoto1} alt="First slide" className="d-block w-100" />
              <Carousel.Caption>
                <h3>Cheesen Pizza</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img src={istockphoto2} alt="Second slide" className="d-block w-100" />
              <Carousel.Caption>
                <h3>Mushroom Pizza</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img src={pizza} alt="Third slide" className="d-block w-100" />
              <Carousel.Caption>
                <h3>Veg Pizza</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
     <div className='text-center'>
         <h2 className='display-5 mt-3 fw-bold'>Pizza For Every Occasion</h2>
        <p className='displayed-5 mt-3'>we have combo pizza in our shop</p>
     </div>

     
    </Container>
  )
}

export default Banner;
