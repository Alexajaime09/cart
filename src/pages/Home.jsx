import React from "react";
import { productsList } from "./productsList";
import { ProductCart } from "../components";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl my-5 ">List Products</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 ms:grid-cols-2 gap-5 bg-gray-300 p-5 rounded-lg">
        {productsList.map((product) => (
          <ProductCart data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
