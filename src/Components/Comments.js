import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import InputGroup from 'react-bootstrap/InputGroup';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Comments = () => {
  return (
    <div>
      <section id='contract' className='bg-light'>
      <div className="text-center my-5">
        <h2 className="text-danger">
        <i className="bi bi-chat-dots-fill"></i>

     <span>  Comments</span>
         
        </h2>
      </div>
      <Container>
        <Row className='justify-content-center'>
            <Col md={6}>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Email"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="bi bi-chat-left-text"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
          </InputGroup>
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="bi bi-phone"></i>

        </InputGroup.Text>
        <Form.Control
          placeholder="phone"
          aria-label="Number"
          aria-describedby="basic-addon1"
        />
          </InputGroup>
      <InputGroup className="mb-3 " >
        
        <Form.Control
          placeholder="Description"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <h4 className="text-danger">Copyright @2024 Smith Pizza Shop</h4>

      
            </Col>
        </Row>
      </Container>
      </section>
    </div>
  )
}

export default Comments
