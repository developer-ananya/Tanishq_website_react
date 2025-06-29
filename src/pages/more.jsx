import img from '../images/more1.webp'



const More = () => {
    return (
        <>
          <div style={{marginLeft:"40px", display:"flex", flexDirection:"column",}}>  
            <img src={img} alt=""  style={{width:"220px",height:"220px", marginTop:"20px"}}/>
            <strong style={{fontSize:"25px"}}>Gold Exchange</strong>
            </div>
        </>
    );
}
export default More;