import React, { useState } from "react";
import "./Input.css";
import Showproduct from "../showProduct/Showproduct";

const Input = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [lsize, setLsize] = useState('');
  const [msize, setMsize] = useState('');
  const [ssize, setSsize] = useState('');
  const [showProduct, setShowProduct] = useState([]);
   
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const lSizeHandler = (e) => {
    setLsize(e.target.value);
  };
  const mSizeHandler = (e) => {
    setMsize(e.target.value);
  };
  const sSizeHandler = (e) => {
    setSsize(e.target.value);
  };
 
  const addProductHandler = () => {
    const product = {name,desc,price,lsize,msize,ssize}
     setShowProduct([...showProduct, product])

    setName("");
    setDesc("");
    setPrice("");
    setLsize("");
    setMsize("");
    setSsize("");
  };

  return (
    <>
    <div className="topcover">
      <div>
        <label htmlFor="">Shoes Name</label>
        <br />
        <br />
        <input type="text" value={name} onChange={nameHandler} />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <br />
        <br />
        <input type="text" value={desc} onChange={descHandler} />
      </div>
      <div>
        <label htmlFor="">Price</label>
        <br />
        <br />
        <input type="number" value={price} onChange={priceHandler} />
      </div>
      <div>
        <label htmlFor="">Quantity Available</label>
        <div className="qty">
          <div>
            <label htmlFor="">L</label>
            <br />
            <input type="number" value={lsize} onChange={lSizeHandler} />
          </div>
          <div>
            <label htmlFor="">M</label>
            <br />
            <input type="number" value={msize} onChange={mSizeHandler} />
          </div>
          <div>
            <label htmlFor="">S</label>
            <br />
            <input type="number" value={ssize} onChange={sSizeHandler} />
          </div>
        </div>
      </div>
      <div>
        <button onClick={addProductHandler}>Add Product</button>
      </div>
    </div>
    <Showproduct showProduct={showProduct}/>
</>
  );
};

export default Input;
