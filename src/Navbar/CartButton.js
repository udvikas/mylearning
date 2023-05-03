import React, { useContext, useState } from "react";
import "./CartButton.css";
import { ProfileContext } from "../Context/ContextProvider";
import { Modal } from "react-overlays";

const CartButton = () => {
  const { cartCount, cartItems } = useContext(ProfileContext);
  const [showModal, setShowModal] = useState(false);

  const showCartHandler = () => {
    if(cartCount === 0) {
      alert('Your Cart is Empty! Add atleast One Item')
      setShowModal(false)
    } else{
    setShowModal(true);
    }
  };

  const hideCartHandler = () => {
    setShowModal(false);
  };
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  const placeOrderHandler = () => {
    alert("Order is Successfully Placed");
    setShowModal(false)
  };
  return (
    <div className="modal-example">
      <button onClick={showCartHandler}>
        <span>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart{" "}
          <sup>
            <strong>{cartCount}</strong>
          </sup>
        </span>
      </button>
      <Modal
        className="modal"
        show={showModal}
        onHide={hideCartHandler}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div className="modal-header">
            <div className="modal-title">Your Cart Details</div>
            <div>
              <span className="close-button" onClick={hideCartHandler}>
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            {showModal && (
              <div onClick={hideCartHandler}>
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <p>Item: {item.name}</p>
                    <p>Details: {item.desc}</p>
                    <p>Price: ${item.price}</p>
                    <p>Size: {item.lsize && item.msize && item.ssize}</p>
                    <hr/>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button className="secondary-button" onClick={hideCartHandler}>
              Close
            </button>
            <button className="primary-button" onClick={placeOrderHandler}>
              Place Order
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CartButton;
