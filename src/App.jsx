import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Gold from "./pages/gold"; 
import Diamond from "./pages/diamond";
import Collection from "./pages/collection";
import Rings from "./pages/rings";
import Earings from "./pages/earings"; 
import Dailywear from "./pages/Dailywear";
import AllJewellery from "./pages/alljewellery";
import Gifting from "./pages/gifting";
import Wedding from "./pages/wedding";
import More from "./pages/more";
import Bag from "./pages/bag";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
  const App=()=>
  {
    return (
     <>
   
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="AllJewellery" element={<AllJewellery/>} />
        <Route path="gold" element={<Gold/>} />
        <Route path="diamond" element={<Diamond/>} />
        <Route path="earings" element={<Earings/>} />
        <Route path="rings" element={<Rings/>} />
        <Route path="dailywear" element={<Dailywear/>} />
        <Route path="collection" element={<Collection/>} />
        <Route path="Wedding" element={<Wedding/>} />
        <Route path="Gifting" element={<Gifting/>} />
        <Route path="More" element={<More/>} />
         <Route path="bag" element={<Bag/>} />


      
      
      
      </Route>
     </Routes>
     
     
     
     </BrowserRouter>
         <ToastContainer position="top-center" autoClose={2000} />
     </>
    );
  }
  export default App;