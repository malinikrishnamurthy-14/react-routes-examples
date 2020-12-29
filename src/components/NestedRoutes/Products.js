import React from "react";

const ProductsTable = () => {
  return (
    <div className="table-container">
      <h1> This is the Products table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P11</td>
            <td>Phone</td>
          </tr>
          <tr>
            <td>P231</td>
            <td>TVs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
