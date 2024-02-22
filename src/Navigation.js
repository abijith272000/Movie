import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='justify-content-center'>
          <Nav className=" gap-5">
            <Link to='/Home'>Home</Link>
            <Link to='/Register'>Register</Link>
            <Link to='/Login'>Login</Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}
