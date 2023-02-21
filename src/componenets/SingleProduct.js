import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import useFetch from "../Fetcher/useFetch";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const { title, description, price, rating, image } = data;
  return (
    <div id="sp">
      {isLoading && <PulseLoader />}
      {error && <h2>{error.message}</h2>}
      <img src={image} alt="" id="single" />
      <h2 id="tit">{title}</h2>
      <h5 id="des">{description}</h5>
      <h3>Price ${price}</h3>
      <button id="cart-btn">Add To Cart</button>
      <Link to="/Products">
        <button id="bpp">Back to Products Page</button>
      </Link>
    </div>
  );
};

export default SingleProduct;
