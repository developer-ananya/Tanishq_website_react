
import colimg from "../images/colbanner1.webp";
import colimg2 from "../images/colbanner2.webp";
import colimg3 from "../images/colbanner3.webp";
import colimg4 from "../images/colbanner4.webp";
import colimg5 from "../images/colbanner5.webp";
import colimg6 from "../images/colbanner6.jpg";    
import colimg7 from "../images/colbanner7.webp";
import colimg8 from "../images/colbanner8.webp";    
import colimg9 from "../images/colbanner9.webp";
import colimg10 from "../images/colbanner10.webp";
import colimg11 from "../images/colbanner11.webp";
import colimg12 from "../images/colbanner12.webp";
import colimg13 from "../images/colbanner13.jpg";
import colimg14 from "../images/colbanner14.jpg";






import {BackendUrl_7} from '../config/backendurl';
import { BackendUrl_8 } from "../config/backendurl";
import { BackendUrl_9 } from "../config/backendurl";
import { BackendUrl_10 } from "../config/backendurl";
import { BackendUrl_11 } from "../config/backendurl";
import { BackendUrl_12 } from "../config/backendurl";
import { BackendUrl_13 } from "../config/backendurl";
import { BackendUrl_14 } from "../config/backendurl";
import { BackendUrl_15 } from "../config/backendurl";
import { BackendUrl_16 } from "../config/backendurl";
import { BackendUrl_17 } from "../config/backendurl";
import { BackendUrl_18 } from "../config/backendurl";
import { BackendUrl_19 } from "../config/backendurl";   
import { BackendUrl_20 } from "../config/backendurl";
import { BackendUrl_21 } from "../config/backendurl";






import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Collection = () => {

    const [CollData, setCollData] = useState([]);
 
    const [CollData_2, setCollData_2] = useState([]);
    const [CollData_3, setCollData_3] = useState([]);
    const [CollData_4, setCollData_4] = useState([]);
    const [CollData_5, setCollData_5] = useState([]);
    const [CollData_6, setCollData_6] = useState([]);
    const [CollData_7, setCollData_7] = useState([]);
    const [CollData_8, setCollData_8] = useState([]);
    const [CollData_9, setCollData_9] = useState([]);
    const [CollData_10, setCollData_10] = useState([]);
    const [CollData_11, setCollData_11] = useState([]);
    const [CollData_12, setCollData_12] = useState([]);
    const [CollData_13, setCollData_13] = useState([]);
    const [CollData_14, setCollData_14] = useState([]);






     const dispatch = useDispatch();
 

  const MyData = async () => {
    try {
      const response = await axios.get(BackendUrl_7,);
      const response_1 = await axios.get(BackendUrl_8,);
      const response_2 = await axios.get(BackendUrl_9,);
        const response_3 = await axios.get(BackendUrl_10,);
        const response_4 = await axios.get(BackendUrl_11,);
        const response_5 = await axios.get(BackendUrl_12,);
        const response_6 = await axios.get(BackendUrl_13,);
        const response_7 = await axios.get(BackendUrl_14,);
        const response_8 = await axios.get(BackendUrl_15,);
        const response_9 = await axios.get(BackendUrl_16);
        const response_10 = await axios.get(BackendUrl_17);
        const response_11 = await axios.get(BackendUrl_18);
        const response_12 = await axios.get(BackendUrl_19);
        const response_13 = await axios.get(BackendUrl_20);
        const response_14 = await axios.get(BackendUrl_21);



        setCollData(response.data);
        setCollData_2(response_2.data);
        setCollData_3(response_3.data);
        setCollData_4(response_4.data);
        setCollData_5(response_5.data);
        setCollData_6(response_6.data);
        setCollData_7(response_7.data);
        setCollData_8(response_8.data);
        setCollData_9(response_9.data);
        setCollData_10(response_10.data);
        setCollData_11(response_11.data);
        setCollData_12(response_12.data);
        setCollData_13(response_13.data);
        setCollData_14(response_14.data);



    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    MyData();
  }, []);




    return (
        <>
            <img src={colimg} alt="" style={{width:"97vw", marginLeft:"10px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
 
    {CollData.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>





<img src={colimg2} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_2.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>





<img src={colimg3} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_3.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>








<img src={colimg4} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_4.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>






<img src={colimg5} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_5.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>









<img src={colimg6} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_6.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>







<img src={colimg7} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_7.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>





<img src={colimg8} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_8.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>




<img src={colimg9} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_9.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>









<img src={colimg10} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_10.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>






<img src={colimg11} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_11.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>






<img src={colimg12} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_12.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>






<img src={colimg13} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container className="my-5" style={{ display: 'flex', gap: '3rem', marginLeft:"8px" }}>
    {CollData_13.map((item) => (
      <Card key={item.id} style={{ minWidth: '330px', height: '100%' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  
</Container>
<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>







<img src={colimg14} alt=""  style={{width:"97vw", marginLeft:"10px", paddingTop:"40px"}} />

<Container
  className="my-5"
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    marginBottom: "2rem",
  }}
>
  {CollData_14.map((item) => (
    <Card
      key={item.id}
      style={{
        width: "23%", // Slightly less than 25% to leave space for gap
        minWidth: "250px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Card.Img
        variant="top"
        src={item.image}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  ))}
</Container>

<button style={{backgroundColor:"black", color:"white",padding:"8px",marginLeft:"680px",width:"250px",}}>SHOP THE COLLECTION</button>





           
        </>
    );
}
export default Collection;