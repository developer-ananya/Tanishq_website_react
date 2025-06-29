import { Outlet } from "react-router-dom";
import TopNav from "./component/topnav";
import Footer from "./component/footer";


const Layout=()=>{

    return(

        <>
        <TopNav/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;