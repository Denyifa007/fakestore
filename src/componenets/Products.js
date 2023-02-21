import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import useFetch from "../Fetcher/useFetch";
import Electronics from "./Electronics";
import Jewelries from "./Jewelries";
import Men from "./Men"
import Women from "./Women";

const Products = ({cartItem,setCartItems, handleAddItem}) => {

  
  return (
    <div className="data">
      <Jewelries cartItem= {cartItem} setCartItems = {setCartItems} handleAddItem={handleAddItem}/>
      <Men cartItem= {cartItem} setCartItems = {setCartItems} handleAddItem={handleAddItem}/>
      <Electronics cartItem= {cartItem} setCartItems = {setCartItems} handleAddItem={handleAddItem}/>
      <Women cartItem= {cartItem} setCartItems = {setCartItems} handndleAddItem={handleAddItem}/>
    </div>
  );
};

export default Products;
