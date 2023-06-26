// rcc (react-class-component)
import React, { Component, Fragment } from 'react';

export default class Header extends Component {
  render() {
    // return trong phương thức render sẽ trả về các nội dung muốn hiển thị cho người dùng, ở đây có thể trả về jsx,chuỗi,số
    return <div className="bg-danger p-3 text-white">đây là header</div>;
  }
}
