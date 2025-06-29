// Footer.js

import "bootstrap/dist/css/bootstrap.min.css";
import qr from "../images/qr.svg";
import ps from "../images/fplaystore.svg";
import apple from "../images/fios.svg";
import tq from "../images/tanishqnamlogo.svg";
import insta from "../images/insta.svg";



import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa";
import { LuMessageCircleCode } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";





const Footer = () => {
  return (
   <footer className="text-light pt-5 pb-4" style={{ backgroundColor: '#300708', marginTop: '50px',overflowX: 'hidden' }}>
            <img src={tq} alt="Tanishq Logo"  style={{ maxWidth: "170px", marginBottom:"50px", marginLeft:"120px" }} />

      <div className="container text-md-left" >
        <div className="row" style={{ marginLeft: '180px' }}>
          
  
          <div className="col-md-3 mb-4" id="qr-section">
            <h5 className="text-uppercase mb-3" id="text-tq">Download the Tanishq App Now</h5>
            <img src={qr} alt="QR Code" className="img-fluid mb-3" style={{ maxWidth: "200px" }} />
            <div className="d-flex gap-2">
              <img src={ps} alt="Play Store" height="60" id="play"/>
              <img src={apple} alt="App Store" height="60" id="ios" />
            </div>
          </div>

<div style={{display:"flex", gap:"20px", marginLeft:"50px", marginTop:"-340px"}}>
          <div className="col-md-3 mb-4" id="useful-links">
            <h5 className="text-uppercase mb-3">Useful Links</h5>
            <ul className="list-unstyled" style={{lineHeight: "2.5"}}>
              <li>Delivery Information</li>
              <li>International Shipping</li>
              <li>Payment Options</li>
              <li>Track your Order</li>
              <li>Returns</li>
              <li>Find a Store</li>
            </ul>
          </div>


          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Information</h5>
            <ul className="list-unstyled"  style={{lineHeight: "2.5"}}>
              <li>Blog</li>
              <li>Offers & Contest Details</li>
              <li>Help & FAQs</li>
              <li>About Tanishq</li>
            </ul>
          </div>


          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p>1800-266-0123</p>
            <h6 className="mt-4">Chat With Us</h6>
            <p>+91 7389482948</p>
            <hr style={{ border:"2px solid white"}}/>
            <div className="d-flex gap-3 fs-5">
             <FaWhatsapp style={{fontSize:"25px"}}/>
            <MdOutlineMessage style={{fontSize:"25px"}}/>
            <LuMessageCircleCode style={{fontSize:"25px"}}/>
            </div>
          </div>
        </div>


        <hr className="my-4"  style={{marginLeft:"150px", width:"86%"}}/>
        <div className="text-center" id="social">
          
          <div className="mb-2" >  <span style={{fontSize:"23px", fontWeight:"bold"}}>Social</span> &nbsp;&nbsp;
            {/* <img src={insta} alt="Tanishq Logo"  style={{ maxWidth: "170px", marginBottom:"50px", marginLeft:"120px" }} /> */}
            
<FaInstagram id="insta"  style={{marginLeft:"10px"}} />
<FaXTwitter id="twitter"  style={{marginLeft:"10px"}}/>
<CiFacebook id="facebook"  style={{marginLeft:"10px"}}/>
<FaYoutube id="youtube"  style={{marginLeft:"10px"}}/>

       </div>
        </div>
        <hr style={{marginLeft:"150px", width:"86%"}}/>

<div id="payment">
  <FaCcVisa style={{padding:"10px",fontSize: "50px"}}/>
<FaCcMastercard  style={{padding:"10px",fontSize: "50px"}}/>
<RiMastercardFill  style={{padding:"10px",fontSize: "50px"}}/>
<FaCcPaypal  style={{padding:"10px",fontSize: "50px"}}/>
<FaCcDinersClub  style={{padding:"10px",fontSize: "50px"}}/>
<SiAmericanexpress  style={{padding:"10px",fontSize: "50px"}}/>

</div>
</div>

<hr />
<div id="terms">
  <p>© 2025 Titan Company Limited. All Rights Reserved.</p>
  <p>Terms & Condiitions</p>
  <p>Privacy Policy</p>
  <p>Disclaimer</p>
</div>



      </div>
    </footer>
  );
}

export default Footer;
