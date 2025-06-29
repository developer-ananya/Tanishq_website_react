import Carousel from 'react-bootstrap/Carousel';
import img0 from "../images/home img0.webp";
import img2 from "../images/home img1.webp";
import img3 from "../images/home img2.webp";
import img4 from "../images/home img3.jpg";
import img5 from "../images/home img4.webp";
import img6 from "../images/home img5.webp";
import img7 from "../images/home img6.webp";
import img8 from "../images/collection1.webp";
import img9 from "../images/collection2.jpg";
import img10 from "../images/collection3.webp";
import img11 from "../images/match1.webp";
import img12 from "../images/match2.jpg";
import img13 from "../images/match3.webp";
import img14 from "../images/match4.jpg";
import img15 from "../images/match5.webp";
import img16 from "../images/match6.jpg";
import img17 from "../images/match7.webp";
import img18 from "../images/match8.webp";
import img19 from "../images/world1.webp";
import img20 from "../images/world2.webp";
import img21 from "../images/world3.webp";
import img22 from "../images/world4.webp";
import img23 from "../images/newarriv1.webp";
import img24 from "../images/newarriv2.webp";

import Card from 'react-bootstrap/Card';
import { IoDiamondSharp } from "react-icons/io5";


const Home = () => {




  return (
    <>
      <Carousel style={{ width: '100%', objectFit: 'cover', boxShadow: '0 0px 40px 8px rgba(0, 0, 0, 0.2)' }}>
        {[img0, img2, img3, img4, img5, img6, img7].map((img, idx) => (
          <Carousel.Item key={idx}>
            <img src={img} alt={`Slide ${idx + 1}`} style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
          </Carousel.Item>
        ))}
      </Carousel>


      <div>
        <h1 style={{ textAlign: "center", marginTop: "50px", color: "#3b0a0a", fontWeight: "400", fontFamily: "Georgia" }}>Tanishq Collections</h1>
        <h3 style={{ textAlign: "center", color: "#555555", fontWeight: "300", fontFamily: "Georgia" }}>Explore our newly launched collection</h3>
        <div className="parent">
          <div className="div1"><img src={img8} alt="" style={{ height: "710px", borderRadius: "20px" }} /> </div>
          <div className="div2"><img src={img9} alt="" style={{ width: "750px", height: "350px", borderRadius: "20px" }} /> </div>
          <div className="div3"><img src={img10} alt="" style={{ width: "750px", height: "350px", borderRadius: "20px" }} /> </div>
        </div>
      </div>


      <br />
      <br />

      <h1 style={{ textAlign: "center", marginTop: "50px", color: "#3b0a0a", fontWeight: "400", fontFamily: "Georgia" }}> Find Your Perfect Match</h1>
      <h3 style={{ textAlign: "center", color: "#555555", fontWeight: "300", fontFamily: "Georgia" }}>Shop By Category</h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        justifyContent: "center",
        marginRight: "50px",
        marginLeft: "50px",
        marginTop: "50px",

      }}>
        <Card style={{ width: '18rem', border: "none", textAlign: "center", }}>
          <Card.Img variant="top" src={img11} style={{ borderRadius: "20px" }} />
          <Card.Body>
            <Card.Title>EARRINGS</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', border: "none", textAlign: "center", }}>
          <Card.Img variant="top" src={img12} style={{ borderRadius: "20px" }} />
          <Card.Body>
            <Card.Title>FINGER-RINGS</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', border: "none", textAlign: "center", }}>
          <Card.Img variant="top" src={img13} style={{ borderRadius: "20px" }} />
          <Card.Body>
            <Card.Title>PENDANTS</Card.Title>

          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', border: "none", textAlign: "center", }}>
          <Card.Img variant="top" src={img14} style={{ borderRadius: "20px" }} />
          <Card.Body>
            <Card.Title>MANGALSUTRA</Card.Title>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: "none", textAlign: "center", }}>
          <Card.Img variant="top" src={img15} style={{ borderRadius: "20px" }} />
          <Card.Body>
            <Card.Title>BRACELETS</Card.Title>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: "none", textAlign: "center", }}>
          <Card.Img variant="top" src={img16} style={{ borderRadius: "20px" }} />
          <Card.Body>
            <Card.Title>BANGLES</Card.Title>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: "none", textAlign: "center", }}>
          <Card.Img variant="top" src={img17} style={{ borderRadius: "20px" }} />
          <Card.Body>
            <Card.Title>CHAINS</Card.Title>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: "none", textAlign: "center", borderRadius: "20px" }}>
          <Card.Img variant="top" src={img18} style={{ borderRadius: "20px" }} />
          <Card.Body>
            <Card.Title>VIEW-ALL</Card.Title>

          </Card.Body>
        </Card>
      </div>




      <h1 style={{ textAlign: "center", fontSize: "35px", marginTop: "50px", color: "#3b0a0a", fontWeight: "400", fontFamily: "Georgia" }}>Tanishq World</h1>
      <h3 style={{ textAlign: "center", fontSize: "20px", color: "#555555", fontWeight: "300", fontFamily: "Georgia" }}>A companion for every occasion</h3>
      <div id='world-card' >
        <Card style={{ width: '18rem', border: "none" }}>
          <Card.Img variant="top" src={img19} style={{ border: "none", borderRadius: "20px", height: "360px", width: "600px" }} />
          <div style={{
            position: 'absolute',
            color: 'white',
            padding: '5px 10px',
            marginTop: "290px", marginLeft: "190px",
            fontSize: "30px", fontWeight: "bold"
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-16px',
              marginLeft: '-200px',
              borderRadius: '20px',
              height: '100px',
              width: '600px',
              background: 'linear-gradient(to top, rgba(128, 0, 0, 0.6), rgba(128, 0, 0, 0))',
            }}></div>
            Wedding
          </div>
        </Card>



        <Card style={{ width: '600px', border: "none", position: "relative" }}>
          <Card.Img
            variant="top"
            src={img20}
            style={{
              border: "none",
              borderRadius: "20px",
              height: "390px",
              width: "600px",
            }}
          />

          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              height: '100px',
              width: '100%',
              borderRadius: '0 0 20px 20px',
              background: 'linear-gradient(to top, rgba(128, 0, 0, 0.6), rgba(128, 0, 0, 0))',
              zIndex: 1,
            }}
          ></div>


          <div
            style={{
              position: 'absolute',
              bottom: '15px',
              right: '250px',
              color: 'white',
              fontSize: "30px",
              fontWeight: "bolder",

              zIndex: 2,
            }}
          >
            Diamond
          </div>
        </Card>


        <Card style={{ width: '18rem', marginTop: "-17px", border: "none" }}>
          <Card.Img variant="top" src={img21} style={{ border: "none", borderRadius: "20px", height: "380px", width: "600px" }} />
          <div style={{
            position: 'absolute',
            color: 'white',
            padding: '5px 10px',
            marginTop: "290px", marginLeft: "220px",
            fontSize: "30px", fontWeight: "bold",


          }}>
            <div style={{
              position: 'absolute',
              bottom: '-35px',
              marginLeft: '-230px',
              borderRadius: '20px',
              height: '100px',
              width: '600px',
              background: 'linear-gradient(to top, rgba(128, 0, 0, 0.6), rgba(128, 0, 0, 0))',

            }}></div>
            Gold
          </div>
        </Card>

        <Card style={{ width: '18rem', marginTop: "3px", border: "none" }}>
          <Card.Img variant="top" src={img22} style={{ border: "none", borderRadius: "20px", height: "360px", width: "600px" }} />
          <div style={{
            position: 'absolute',
            color: 'white',
            padding: '5px 10px',
            marginTop: "290px", marginLeft: "190px",
            fontSize: "30px", fontWeight: "bold"
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-16px',
              marginLeft: '-200px',
              borderRadius: '20px',
              height: '100px',
              width: '600px',
              background: 'linear-gradient(to top, rgba(128, 0, 0, 0.6), rgba(128, 0, 0, 0))',
            }}></div>
            Dailywear
          </div>
        </Card>

      </div>

    <div id='arrival' >

        <div style={{ marginLeft: "160px", fontFamily: "Gorgio", color: "white", paddingTop: "50px" }}>
          <div style={{ display: "flex", gap: "30px" }}>
            <h2 style={{ fontSize: "35px", marginTop: "-15px" }}>New Arrivals</h2>
            <h5 style={{ borderRadius: "50px", marginTop: "-15px", padding: "10px", backgroundColor: "rgba(255, 255, 255, 0.6", width: "180px", fontSize: "20px" }}> <IoDiamondSharp />{" "}500+ New Item</h5>
          </div>
          <h4 style={{ fontSize: "20px" }}>New Arrivals Dropping Daily,Monday through Friday.</h4>
          <h4 style={{ fontSize: "20px" }}>Explore the Latest Launches Now!</h4>
        </div>

        <div id='new'>
          <Card style={{ width: '18rem', border: "none", marginTop: "90px" }}>
            <Card.Img variant="top" src={img23} style={{ width: "600px", marginLeft: "-300px", border: "12px solid white" }} />
            <div style={{
              position: 'absolute',
              color: 'white',
              padding: '5px 10px',
              marginTop: "290px", marginLeft: "-280px",
              fontSize: "20px", fontWeight: "400"
            }}>
              Mangalsutra
            </div>
          </Card>

          <Card style={{ width: '18rem', marginTop: "90px", border: "none" }}>
            <Card.Img variant="top" src={img24} style={{ width: "600px", border: "12px solid white" }} />
            <div style={{
              position: 'absolute',
              color: 'white',
              padding: '5px 10px',
              marginTop: "290px", marginLeft: "20px",
              fontSize: "20px", fontWeight: "400"
            }}>
              Pendants
            </div>

          </Card>
        </div>

      </div>

<hr />

</>
  );
};

export default Home;






