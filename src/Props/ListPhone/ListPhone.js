import React, { Component } from 'react';
import PhoneDetail from './PhoneDetail';
// import img1 from './img/applephone.jpg';
// import dataJson from './img/dataPhone.json';
export default class ListPhone extends Component {
  arr = ['applephone.jpg', 'applephone.jpg'];
  arrPhone = [
    {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, 6.2, Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './image/vsphone.jpg',
    },
    {
      maSP: 2,
      tenSP: 'Meizu 16Xs',
      manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
      heDieuHanh: 'Android 9.0 (Pie); Flyme',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 7600000,
      hinhAnh: './image/sp_note7.png',
    },
    {
      maSP: 3,
      tenSP: 'Iphone XS Max',
      manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
      heDieuHanh: 'iOS 12',
      cameraSau: 'Chính 12 MP & Phụ 12 MP',
      cameraTruoc: '7 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 27000000,
      hinhAnh: './image/applephone.jpg',
    },
  ];
  state = {
    phoneItem: {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, 6.2, Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './image/vsphone.jpg',
    },
  };
  xemChiTietSanPham = (item) => {
    console.log(item);
    this.setState({
      phoneItem: item,
    });
  };
  render() {
    return (
      <div>
        {/* sử dụng import để gắn hình ảnh vào thẻ img  */}
        {/* <img src={img1} alt="" /> */}
        {/* // Cách 2 là để hình nằm trong public và tưởng tượng đường dẫn bắt đầu từ file index.html  */}
        {/* <img src="./image/applephone.jpg" alt="" />
        {this.arr.map((item, index) => {
          return <img src={`./image/${item}`} alt="" />;
        })} */}
        <h1>Danh sách sản phẩm</h1>
        <div className="row">
          {this.arrPhone.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <PhoneDetail xemChiTiet={this.xemChiTietSanPham} item={item} />
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-4">
            <img className="w-75" src={this.state.phoneItem.hinhAnh} alt="" />
          </div>
          <div className="col-8">
            <h2>Thông số kỹ thuật</h2>
            <table cellPadding={'20px'}>
              <tr>
                <td>Màn hình</td>
                <td>{this.state.phoneItem.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{this.state.phoneItem.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{this.state.phoneItem.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{this.state.phoneItem.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{this.state.phoneItem.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{this.state.phoneItem.rom}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
