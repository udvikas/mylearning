import React, { useContext, useState } from "react";
import "./CartButton.css";
import { ProfileContext } from "../Context/ContextProvider";

const CartButton = () => {
  const { cartCount,cartItems } = useContext(ProfileContext);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div>
      <button onClick={showCartHandler}>
        <span>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart{" "}
          <sup>
            <strong>{cartCount}</strong>
          </sup>
        </span>
      </button>
      {showCart && (
        <div className="cart-overlay" onClick={hideCartHandler}>
          <div className="cart-dialog">
            <h2>Cart Items</h2>
            {/* Display the list of cart items here */}
            {showCart && (
              <div className="cart-dialog">
                <h2>Cart Items</h2>
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                    <p>${item.price}</p>
                    <p>Size: {item.lsize || item.msize || item.ssize}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;
