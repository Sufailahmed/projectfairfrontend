import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({dashboard}) {
  const isdashboard=dashboard ? true:false;
  return (
  <>
        <Navbar className="bg-success">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          
          <Navbar.Brand className='text-light' >
          <i class="fa-brands fa-stack-overflow"></i>

         Projects
          </Navbar.Brand>
          </Link>
          {
            isdashboard &&
          <button className='btn btn-warning rounded'>Logout</button>
}
         
        </Container>
      </Navbar>
  
  
  
  
  </>
  )
}

export default Header