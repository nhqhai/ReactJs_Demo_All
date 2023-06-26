import React, { Component } from 'react';

export default class ThongTin extends Component {
  namSinh = '2005';
  sinhVien = {
    hoTen: 'Nam',
  };
  login = false;

  hienThiHinhAnh() {
    return 'https://i.pravatar.cc/500?u=5';
  }
  hienThiObject() {
    // khi trả về để binding trong react, chỉ chấp nhận chuỗi hoặc jsx
    return this.sinhVien.hoTen;
  }

  render() {
    let hoTen = 'Lương Sơn Bá';
    let ngaySinh = '09/05/1989';
    // console.log(<div></div>);
    return (
      <div>
        <img src={this.hienThiHinhAnh()} alt="" />
        <p>{hoTen}</p>
        <p>{this.hienThiObject()}</p>
        <p>{this.namSinh}</p>
        {this.login ? (
          <p>Nguyễn Văn A</p>
        ) : (
          <button className="btn btn-success">Login</button>
        )}
      </div>
    );
  }
}
