import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pizzacard from './Pizzacard';

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-warning my-3 py-5">
            Treat Yourself With Our Everyday Menu <i className="bi bi-tiktok"></i>
          </h3>
          <Row>
            {menu.map((item) => (
              <Col key={item} md={6} lg={4}>
                <Pizzacard />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Menu;
