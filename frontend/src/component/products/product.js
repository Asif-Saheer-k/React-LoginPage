import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Products() {
  const navigate = useNavigate();
  const fecthprodust = async () => {
    const {data} = await axios.get("/api/notes");
    console.log(data);
    setData(data)
  };
  const [data,setData]=useState([])
  useEffect(() => {
    const userInfo=localStorage.getItem("userInfo")
    if(!userInfo){
      navigate("/login");
    }
  
    fecthprodust();
  },[]);


  
 
  return (
    <>
      {data.map((note)=>{
         return(
          <div className="row">
            
    <Card style={{ width: "18rem",marginTop:'2rem'}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      
        
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
    </div>
      );
        })}
      
    </>
    
  );
  
}


export default Products;
