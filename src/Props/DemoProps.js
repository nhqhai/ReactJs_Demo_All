import React, { Component } from 'react';
import CardPhoneItem from './CardPhoneItem';

export default class DemoProps extends Component {
  arrObject = [
    {
      ten: 'Galaxy S22',
      gia: 30000,
      hang: 'Samsung',
      hinhAnh:
        'https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg',
    },
    {
      ten: 'Galaxy S23',
      gia: 30000,
      hang: 'Nokia',
      hinhAnh:
        'https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg',
    },
    {
      ten: 'Galaxy S24',
      gia: 70000,
      hang: 'I phone',
      hinhAnh:
        'https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg',
    },
  ];
  phoneItem = {
    ten: 'Galaxy S22',
    gia: 30000,
    hang: 'Samsung',
    hinhAnh:
      'https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg',
  };
  state = {
    hoTen: 'Quang Khải',
  };
  thayDoiHoTen = (string) => {
    this.setState({
      hoTen: string,
    });
  };
  // props là một thuộc tính giúp truyền dữ liệu từ các component cha tới các component con
  // props có thể nhận các giá trị về string, number, array, object, jsx, có thể truyền các function vào props
  render() {
    // let {ten,gia,hang,hinhAnh} = this.phoneItem
    return (
      <div>
        <h1>Demo Props React</h1>
        <p>{this.state.hoTen}</p>

        <div className="container">
          <div className="row">
            {/* <CardPhoneItem item={this.phoneItem} hoTen="Nam" tuoi={35} /> */}
            {/* sử dụng render with map kèm theo truyền props để có thể gửi dữ liệu xuống các component con và render lên cho người dùng  */}
            {/* // hàm slice giúp tạo ra một array mới nhận vào 2 tham số giá trị bắt đầu và giá trị kết thúc  */}
            {this.arrObject.map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <CardPhoneItem
                    item={item}
                    hoTen={this.state.hoTen}
                    thayDoiHoTen={this.thayDoiHoTen}
                  />
                </div>
              );
            })}
            {/* <CardPhoneItem item={this.arrObject[0]} key={index} /> */}
            {/* <CardPhoneItem item={this.arrObject[1]} key={index} /> */}
            {/* <CardPhoneItem item={this.arrObject[2]} key={index} /> */}
          </div>
        </div>
      </div>
    );
  }
}
