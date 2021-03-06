import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function CollapsibleExample(props) {
  const user=localStorage.getItem("userInfo")
  if(user){
  const json=JSON.parse(user)
   var userName=json.name
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">USER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link className="text-decoration-none" to="/admin"> ADMIN</Link></Nav.Link>
           
     
          </Nav>
          <Nav>
           
         < NavDropdown title={userName ? userName:'LOGIN'} id="collasible-nav-dropdown">

          { userName ?  <NavDropdown.Item href="/login"><Link to='/login' onClick={()=>{
            localStorage.removeItem('userInfo')
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
