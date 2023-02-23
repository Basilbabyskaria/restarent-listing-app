import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          {/* <FontAwesomeIcon icon="fa-solid fa-pot-food" /> */}
            Restaurant Central
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header