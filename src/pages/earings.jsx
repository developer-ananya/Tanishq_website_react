

import { Container, Row, Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';

import {BackendUrl_4} from '../config/backendurl';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

import Card from 'react-bootstrap/Card';





const Earrings = () => {

    const [EarData, setEarData] = useState([]);
     const dispatch = useDispatch();
 



  const MyData = async () => {
    try {
      const response = await axios.get(BackendUrl_4);
      setEarData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    MyData();
  }, []);



    return (
       <>
       <h1 style={{marginLeft:"120px", marginTop:"50px"}}>Earrings</h1>
     <Container className="my-5">
        <Row>
          {EarData.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
              <Card style={{ width: '100%', height: '100%' }}>
                <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit:"fill", }} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text><strong>₹{item.price}</strong></Card.Text>
                 <Button variant="primary" onClick={()=>{dispatch(addToCart({id:item.id, name:item.name,  image:item.image,qnty:1,  price:item.price}))}} style={{backgroundColor:"#300708"}}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
       
       </>
    );
}
export default Earrings;