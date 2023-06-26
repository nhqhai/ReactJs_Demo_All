import React, { Component } from "react";

export default class Ex_Car extends Component {
  state = {
    color: "red",
  };

  handleChangeColor = (value) => {
    this.setState({ color: value });
  };
  render() {
    let { color } = this.state;
    return (
      <div className="container row">
        <img
          src={`./img_ex/CarBasic/products/${color}-car.jpg`}
          alt=""
          className="col-4"
        />
        <div className="col-6">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.handleChangeColor("red");
            }}
          >
            Red
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              this.handleChangeColor("black");
            }}
          >
            Black
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              this.handleChangeColor("silver");
            }}
          >
            Silver
          </button>
        </div>
      </div>
    );
  }
}
