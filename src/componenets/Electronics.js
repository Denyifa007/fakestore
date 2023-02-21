import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import useFetch from "../Fetcher/useFetch";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Electronics = ({ cartItem, setCartItems, handleAddItem }) => {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  function handleAddItem(items) {
    const itemsSelected = cartItem.find(
      (singleitem) => singleitem.id === items.id
    );
    if (itemsSelected) {
      setCartItems(
        cartItem.map((oneItem) =>
          oneItem.ID === items.id
            ? { ...itemsSelected, quantity: itemsSelected.quantity + 1 }
            : oneItem
        )
      );
    } else {
      setCartItems([...cartItem, { ...itemsSelected, quantity: 1 }]);
    }
  }
  const notify = () => toast("Product Successfully Added!");
  return (
    <div>
      <h2 id="jc">
        <span>Electronics</span> Category
      </h2>
      {isLoading && <PulseLoader />}
      {error && <h2>{error.message}</h2>}
      <div className="innerdata">
        {data.map((datum) => {
          const { id, image, rating, price } = datum;
          return (
            <div className="innerdatas" key={id}>
              <Link to={`/SingleProduct/${id}`}>
                <img src={image} alt="" className="images" />
                <div id="rp">
                  <h2>Rate {rating.rate}</h2>
                  <h3 id="hh">Price ${price}</h3>
                </div>
              </Link>
              <button
                id="cart"
                onClick={() => {
                  handleAddItem(datum);
                  notify();
                }}
              >
                🛒 Add to cart
              </button>
            </div>
          );
        })}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Electronics;
