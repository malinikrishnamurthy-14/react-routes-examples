import React from "react";
import { Route, Link } from "react-router-dom";
import productsData from "./data/products-data";
import Product from "./Product";

const ProductsList = () => {
  return (
    <>
      <ol type="1">
        {productsData.map((product, key) => {
          return (
            <li key={key} className="product-list-item">
              <Link
                className="product-list-item-link"
                to={`/PassDataInURL/ProductsList/${product.name}`}
              >
                {product.name}
              </Link>
            </li>
          );
        })}
      </ol>

      <Route path="/PassDataInURL/ProductsList/:name" component={Product} />
      
    </>
  );
};

export default ProductsList;
