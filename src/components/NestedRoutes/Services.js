import React from "react";

const ServicesTable = () => {
  return (
    <div className="table-container">
      <h1> This is the Services table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Service Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S011</td>
            <td>Repair of mobiles</td>
          </tr>
          <tr>
            <td>S021</td>
            <td>Repair of TVs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
