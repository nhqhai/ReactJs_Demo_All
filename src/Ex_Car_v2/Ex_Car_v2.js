import React, { Component } from "react";

let colorArr = ["red", "black", "silver"];
export default class Ex_Car_v2 extends Component {
  state = {
    activeIndex: 0,
  };

  handleChangeColor = (value) => {
    // this.setState({ color: value });
    this.setState({ activeIndex: this.state.activeIndex + 1 });
  };
  render() {
    let { activeIndex } = this.state;
    return (
      <div className="container row">
        <img
          src={`./img_ex/CarBasic/products/${colorArr[activeIndex]}-car.jpg`}
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
            Prev
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              this.handleChangeColor("black");
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
