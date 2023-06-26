import React, { Component } from 'react';

export default class CardPhoneItem extends Component {
  render() {
    // để lấy được các dữ liệu truyền vào component ta sẽ sử dụng this.props
    console.log(this.props.item.ten);
    // console.log(this.props);
    let { hinhAnh, gia, hang, ten } = this.props.item;

    return (
      // bs5-card-background
      <div className="card text-white bg-primary">
        <img className="card-img-top" src={hinhAnh} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{ten}</h4>
          <p className="card-text">{hang}</p>
          <p>{gia}</p>
          <p>{this.props.tuoi}</p>
          <p>{this.props.hoTen}</p>
          {/* <button
            onClick={() => {
              // props là một dữ liệu dạng read-only nên không cho phép thay đổi giá trị khi ở component con
              this.props.hoTen = 'Nam';
              console.log(this.props.hoTen);
            }}
          >
            Thay đổi props
          </button> */}
          <button
            onClick={() => {
              // thayDoiHoTen ở đây chính là function được định nghĩa ở component cha
              this.props.thayDoiHoTen('Khanh');
            }}
          >
            Đổi tên
          </button>
        </div>
      </div>
    );
  }
}
