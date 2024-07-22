import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import center from '../Assets/center.jpeg';
import Button from 'react-bootstrap/Button';

const Pickoftheweek = () => {
  return (
    <section id="try">
      <div className="text-center my-5">
        <h2 className="display-5 text-warning">
          <i className="bi bi-search-heart"></i>
          <span> Pick Of The Week</span>
        </h2>
      </div>
      <Container>
        <Row className='align-items-center'>
          <Col md={7}>
            <Image src={center} alt="Pick of the week" fluid={true} />
          </Col>
          <Col md={5}>
          <div>
            <h1>Double Cheese</h1>
            <p className='lead-text-muted'>Discover the ultimate indulgence with our double pizza special! Two layers of crispy crust, oozing with double the cheese and your favorite toppings.
            Whether you're craving pepperoni, mushrooms, or extra veggies, our double pizza has it all. It's the perfect choice for any pizza lover looking for an extra satisfying meal.
            Come and experience the taste sensation that's taking the town by storm. Our double pizza is made with the freshest ingredients and baked to perfection.
            </p>
            <Button variant="danger">Buy Now</Button>{' '}
          </div>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default Pickoftheweek;
