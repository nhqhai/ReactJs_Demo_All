import React, { Component } from 'react';
import FormProduct from './FormProduct';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>Create Product</h1>
        {/* bs5-card-background  */}
        <div className="container">
          <FormProduct />
          <div>
            <table className="table" cellPadding={20}>
              <thead className="bg-dark text-white">
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Type</th>
                <th>Action</th>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>img</td>
                  <td>Samsung</td>
                  <td>30</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>Mobile</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
