import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';                                        //For Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

const Appbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" className='fw-bold'><h2 className='text-warning'><span><i className="bi bi-yelp"></i>Smith Pizza Shop</span></h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav>
          <Nav.Link href="#home" className='fw-bold text-primary' >Home</Nav.Link>
          <Nav.Link href="#menu" className='fw-bold text-primary'>Menu</Nav.Link>
          <Nav.Link href="#try" className='fw-bold text-primary'>Must Try</Nav.Link>
          <Nav.Link href="#contract" className='fw-bold text-primary'>Contract us</Nav.Link>
          <Nav.Link  className='fw-bold text-primary'><i class="bi bi-cart-fill"></i></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Appbar
