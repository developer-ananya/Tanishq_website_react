
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img1 from "../images/tanishq nav.png"
import { IoDiamondSharp } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { GiAries } from "react-icons/gi";
import { IoGiftOutline } from "react-icons/io5";
import { GiDoorRingHandle } from "react-icons/gi";
import { GiGoldBar } from "react-icons/gi";
import { GiDropEarrings } from "react-icons/gi";
import { GiEarrings } from "react-icons/gi";
import { BsCollection } from "react-icons/bs";
import { GiLinkedRings } from "react-icons/gi";
import { TiAnchor } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";

import { useSelector } from "react-redux";





const TopNav = () => {
    const cartData = useSelector(state=>state.mycart.cart);
    const cartLength= cartData.length;
    return (

        <>
    <nav class="navbar bg-body-tertiary" >
        <div class="container" >
            <Nav.Link as={Link} to="/home">
                <img src={img1} alt="Tanishq logo" width="130" height="80" />
            </Nav.Link>
<div>
    <form class="d-flex" role="search" >
        <input class="form-control me-2" type="search" placeholder="Search for Gold Jwellery, Diamond Jewelley and more..." aria-label="Search" id='search' />

    </form>
    <CiSearch />

</div>
            
<div style={{ display: "flex", gap: "20px", fontSize: "23px" , color:"#300708"}}>
<IoDiamondOutline />
<IoStorefrontOutline />
<FaRegHeart />
<FaRegUser />

 <Nav.Link
  as={Link}
  to="/bag"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#300708',
    fontSize: '20px',
    fontWeight: '500',
    marginTop: '-6px',
    textDecoration: 'none',
    position: 'relative',
  }}
>
  <IoBagHandleOutline size={24} />
  <span
    style={{
      position: 'absolute',
      top: '-8px',
      right: '-10px',
      background: '#300708',
      color: 'white',
      fontSize: '12px',
      padding: '2px 6px',
      borderRadius: '50%',
      fontWeight: 'bold',
    }}
  >
    {cartLength}
  </span>
</Nav.Link>
</div>


                </div>
            </nav>




            <div style={{ display: "flex", justifyContent:"space-evenly", alignItems: "center", gap: "20px" }}>


                <Navbar bg="white" data-bs-theme="black" >
                    <Nav className="me-auto" style={{ display: "flex", gap: "30px", fontSize: "18px", color: "#300708" }}>
                        <Nav.Link as={Link} to="home" ></Nav.Link>

                        <Nav.Link as={Link} to="home"></Nav.Link>
                        
                        <Nav.Link as={Link} to="AllJewellery"><TiAnchor />{" "}All Jewellery</Nav.Link>
                        <Nav.Link as={Link} to="gold"><GiGoldBar />{" "}Gold</Nav.Link>
                        <Nav.Link as={Link} to="diamond"> <IoDiamondSharp />{" "}Diamond</Nav.Link>
                        <Nav.Link as={Link} to="earings" ><GiDropEarrings />{" "}Earings</Nav.Link>
                        <Nav.Link as={Link} to="rings"><GiDoorRingHandle />{" "}Rings</Nav.Link>
                        <Nav.Link as={Link} to="dailywear"><GiEarrings />{" "}Daily Wear</Nav.Link>
                        <Nav.Link as={Link} to="collection"><BsCollection />{" "}Collection</Nav.Link>
                        <Nav.Link as={Link} to="Wedding"><GiLinkedRings />{" "}Wedding</Nav.Link>
                        <Nav.Link as={Link} to="Gifting"><IoGiftOutline />{" "}Gifitng</Nav.Link>
                        <Nav.Link as={Link} to="More"><GiAries />{" "}More</Nav.Link>
                    </Nav>

                </Navbar>
            </div>


        </>
    )

}
export default TopNav;




