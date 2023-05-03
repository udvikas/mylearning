import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

const ContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [lsize, setLsize] = useState("");
  const [msize, setMsize] = useState("");
  const [ssize, setSsize] = useState("");
  return (
    <ProfileContext.Provider
      value={{
        name,
        setName,
        desc,
        setDesc,
        price,
        setPrice,
        lsize,
        setLsize,
        msize,
        setMsize,
        ssize,
        setSsize,
        cartCount,
        setCartCount,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ContextProvider;
