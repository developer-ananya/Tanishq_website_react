import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { qtyIncr, qtyDecr, proRemove } from "./cartSlice";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

const Bag = () => {
  const cartData = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();

  let TotAmount = 0;

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">🛒<strong>My <span style={{color:"red"}}>Cart</span> </strong> </h2>

      <Table responsive striped bordered hover className="align-middle text-center">
        <thead style={{ backgroundColor: "#f8f9fa" }}>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Name</th>
           
            <th>Quantity</th>
            <th>Price (₹)</th>
            <th>Total (₹)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartData.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">
                Your cart is empty.
              </td>
            </tr>
          ) : (
            cartData.map((item, index) => {
              const total = item.qnty * item.price;
              TotAmount += total;
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.image}
                      width="80"
                      height="80"
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.name}</td>
                 
                  <td>
                    <FaMinusSquare
                      onClick={() => dispatch(qtyDecr({ id: item.id }))}
                      style={{ cursor: "pointer", marginRight: "8px", color: "#d63384" }}
                      size={18}
                    />
                    {item.qnty}
                    <FaPlusSquare
                      onClick={() => dispatch(qtyIncr({ id: item.id }))}
                      style={{ cursor: "pointer", marginLeft: "8px", color: "#198754" }}
                      size={18}
                    />
                  </td>
                  <td>₹{item.price}</td>
                  <td>₹{total}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => dispatch(proRemove({ id: item.id }))}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>

      {cartData.length > 0 && (
        <Card className="text-center p-3 mt-3 shadow-sm">
          <h4>
           <strong style={{color:"green",fontWeight:"bolder"}}> Total Amount:</strong> <FaIndianRupeeSign  style={{color:"#300708"}}/> <strong> {TotAmount}</strong>
          </h4>
          <Button variant="success" className="mt-2" style={{ backgroundColor: "#300708", borderColor: "#300708", width: "200px",marginLeft:"80%" }}>
            Proceed to Checkout</Button>
          
        </Card>
      )}
    </Container>
    
  );
};

export default Bag;
