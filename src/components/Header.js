import React from 'react'
import {Navbar,Container,Nav,select} from 'react-bootstrap';
function Header({data}){
    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="#home">COVID-19 Tracker</Navbar.Brand>
          
         {/* mdb-select md-form */}
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <form class="form-inline well" >
              <select class="form-control form-select" searchable="Search here.." >
                    {/* {data.map(item =>(
                    <option value={item.name}>{item.name}</option>
                  ))} */}
                  <option value="India">India</option>
                  <option value="Worldwide">Worldwide</option>
              </select>
         </form>
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#vaccine">VACCINATION</Nav.Link>
              <Nav.Link href="#news">NEWS</Nav.Link>
              <Nav.Link href="#help">HELP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default Header;
