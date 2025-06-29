

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import BackendUrl from '../config/backendurl';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import pic from '../images/allj1.webp';
import pic2 from '../images/allj2.webp';
import pic3 from '../images/allj3.webp';



const AllJewellery = () => {

    const [myData, setMyData] = useState([]);
     const dispatch = useDispatch();
 const navigate = useNavigate();



  const getData = async () => {
    try {
      const response = await axios.get(BackendUrl);
      setMyData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);



    return (
       <>
        <h1 style={{marginLeft:"120px", marginLeft:"50px", fontSize:"30px"}}>All Jewellery</h1>
<div style={{display:"flex", justifyContent:"center", marginTop:"50px", gap:"20px"}}> 
  <div style={{display:"flex",flexDirection:"column",}}><img src={pic} alt="" style={{width:"220px",height:"220px"}}/> <strong style={{marginLeft:"90px"}}>14Kt</strong></div>
 <div style={{display:"flex",flexDirection:"column"}}> <img src={pic2} alt=""  style={{width:"220px",height:"220px"}}/> <strong style={{marginLeft:"90px"}}>18Kt</strong></div>
  <div style={{display:"flex",flexDirection:"column"}}><img src={pic3} alt=""  style={{width:"220px",height:"220px"}}/>  <strong style={{marginLeft:"90px"}}>22Kt</strong></div>
</div>















     <Container className="my-5">
        <Row>
          {myData.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
              <Card style={{ width: '100%', height: '100%' }}>
                <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text><strong>₹{item.price}</strong></Card.Text>
                 <Button variant="primary" onClick={()=>{dispatch(addToCart({id:item.id, name:item.name, description:item.description,   image:item.image,qnty:1,  price:item.price}))}} style={{backgroundColor:"#300708"}}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
       
       </>
    );
}
export default AllJewellery;