import React from "react";
import productsData from './data/products-data';

const Product = ({ match }) => {

  const productName = match.params.name;

  const productinfo = productsData.find((product) => product.name === productName);

  return (
    <div>
      <div className="landing-text">
        <h1 className="landing-para">{`Product: ${productinfo.name}`}</h1>
        <p className="landing-para">{productinfo.description}</p>
      </div>
    </div>
  );
};

export default Product;
