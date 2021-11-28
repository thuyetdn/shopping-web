import { useState } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";

function Cart ({cartItems,removeFromCart}){
    const [showCheckout, setShowCheckout] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const handleInput = (e) => {
      if(e.target.name === "name"){
        setName(e.target.value)
       
      } else if (e.target.name === "email") {
        setEmail(e.target.value)
        
      } else {
        setAddress(e.target.value)
       
      }
      
      // [e.target.name]: e.target.value
    };
    // console.log(name)
    //   console.log(email)
      // console.log(cartItems)
    const createOrder = (e) => {
      e.preventDefault();
      const order = { //eslint-disable-line
        name: name,
        email: email,
        address: address,
        cartItems: cartItems,
      };
    };
     return(
          <div>
          {cartItems.length === 0 ? (
            <div className="cart cart-header">Cart is empty</div>
          ) : (
            <div className="cart cart-header">
              You have {cartItems.length} in the cart{" "}
            </div>
          )}
          <div>
            <div className="cart">
              <Fade left cascade>
                <ul className="cart-items">
                  {cartItems.map((item) => (
                    <li key={item._id}>
                      <div>
                        <img src={item.image} alt={item.title}></img>
                      </div>
                      <div>
                        <div>{item.title}</div>
                        <div className="right">
                          {formatCurrency(item.price)} x {item.count}{" "}
                          <button
                            className="button"
                            onClick={() => removeFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
            {cartItems.length !== 0 && (
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <button 
                   onClick={() => {
                    setShowCheckout(true)
                  }} className="button primary">Proceed</button>
                </div>
              </div>
            )}
            { showCheckout && (
                <Fade right cascade>
                  <div className="cart">
                    <form onSubmit={createOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit">
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Fade>
                )}
          </div>
        </div>
     )
}
export default Cart