import React, { Component } from 'react';

export default class PhoneDetail extends Component {
  render() {
    let { item } = this.props;
    console.log(this.props);
    return (
      <div>
        <img src={item.hinhAnh} alt="" />
        <h2>{item.tenSP}</h2>
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.xemChiTiet(item);
          }}
        >
          Xem chi tiết
        </button>
      </div>
    );
  }
}
