import { ProfileContext } from "../Context/ContextProvider";
import "./Showproduct.css";
import {useContext} from 'react';

const Showproduct = ({ showProduct }) => {

  const {setCartCount, setCartItems} = useContext(ProfileContext);

  // const addToCart = () => {
  //   setCartCount((prevCount) => prevCount + 1);
  // };

  const addToCart = (item) => {
    const newItem = {
      name: item.name,
      desc: item.desc,
      price: item.price,
      lsize: item.lsize,
      msize: item.msize,
      ssize: item.ssize,
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    setCartCount((prevCount) => prevCount + 1);
  };
  
  return (
    <>
      {showProduct.map((item, index) => (
        <div key={index}>
          {" "}
          <div className="cover">
            <h4>{item.name}</h4>
            <h4>{item.desc}</h4>
            <h4>${item.price}</h4>
            <div className="qtySize">
            <button>L {item.lsize}</button> 
            <button>M {item.msize}</button>
            <button>S {item.ssize}</button>
            </div>
            <button onClick={addToCart}>Add To Cart</button>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default Showproduct;
