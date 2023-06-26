import React, { Component } from "react";

export default class HandleEvent extends Component {
  thayDoiNoiDung = () => {
    document.querySelector("h1").innerHTML = "Tôi đã đổi nội dung";
  };

  demSao = () => {
    document.querySelector("h1").style.color = "red";
  };

  handleOnChange = (event) => {
    let { value } = event.target;
    console.log(value);
    document.querySelector("h1").innerHTML = value;
  };

  render() {
    return (
      <div>
        <h1>Hello CyberSoft</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            console.log("Hello Cô Ba");
            this.thayDoiNoiDung();
            this.demSao();
          }}
        >
          Bấm để đổi nội dung
        </button>
        <div className="mb-3">
          <label className="form-label">Thay đổi nội dung</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="helpId"
            onChange={this.handleOnChange}
          />
        </div>
      </div>
    );
  }
}
