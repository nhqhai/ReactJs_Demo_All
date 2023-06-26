import React, { Component } from "react";
import { movieArr } from "./dataMovie";

export default class RenderWithMap extends Component {
  renderListMovie = () => {
    // return 1: renderListMovie
    // return 2: function nằm trong map
    return movieArr.map(({ hinhAnh, tenPhim }, index) => {
      return (
        <div key={index} className="card text-left col-2">
          <img className="card-img-top" src={hinhAnh} alt />
          <div className="card-body">
            {/* <h4 className="card-title">{tenPhim}</h4>
            <p className="card-text">Body</p> */}
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h2>RenderWithMap</h2>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}

let user = {
  name: "alice",
  age: 2,
};
let { name, age } = user;
console.log("name", name);
