import React from "react";
import { Link } from "react-router-dom";
import { iconCart } from "../assets/img";
import { useSelector } from "react-redux";

const ProductCart = (props) => {
  const { id, name, price, image, slug } = props.data;
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          className="w-full object-cover object-top drop-shadow-[0_80px_30px_#0007]"
          alt={name}
        />
      </Link>
      <h3 className="text-2xl py-3 text-center font-medium">{name}</h3>
      <div className="flex justify-between items-center">
        <p>
          $<span className="text-2xl font-medium">{price}</span>
        </p>
        <button className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2">
          Add to cart
          <img src={iconCart} alt="buy" width={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
