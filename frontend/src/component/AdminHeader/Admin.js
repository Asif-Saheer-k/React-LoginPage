import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function CollapsibleExample(props) {
  

    
        const admin=localStorage.getItem("adminInfo")
        if(admin){
        const json=JSON.parse(admin)
        console.log("jfdjlkj",json);
        var adminName=json
        }


    


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link> <Link className="text-decoration-none" to="/login"> USER</Link></Nav.Link>
           
     
          </Nav>
          <Nav>
           
         < NavDropdown title={adminName? 'ADMIN':'LOGIN'} id="collasible-nav-dropdown">

          { adminName ?  <NavDropdown.Item href="/admin"><Link to='/admin' onClick={()=>{
            localStorage.removeItem('adminInfo')
          }}>Logout</Link></NavDropdown.Item>: <NavDropdown.Item href="/signup"><Link to='/signup' onClick={()=>{
      
          }}>SIGNUP</Link></NavDropdown.Item>}
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
