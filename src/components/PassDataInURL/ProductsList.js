import React from "react";
import { Route, Link } from "react-router-dom";
import Product from "./Product";
import productsData from "./data/products-data";

const ProductsList = () => {
  return (
    <>
      <div className="products-list-heading-container">
        <p className="products-list-heading">Products List</p>
      </div>

      <ol type="1">
        {productsData.map((product, key) => {
          return (
            <li key={key} className="product-list-item">
              <Link
                className="product-list-item-link"
                to={`/PassDataInURL/${product.name}`}
              >
                {product.name}
              </Link>
            </li>
          );
        })}
      </ol>

      <Route path="/PassDataInURL/:name" component={Product} />
    </>
  );
};

export default ProductsList;
