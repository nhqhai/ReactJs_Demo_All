import React, { Component } from "react";

export default class Ex_DemoState extends Component {
  state = {
    isLogin: false,
  };
  renderButton = () => {
    if (this.state.isLogin) {
      return (
        <button className="btn btn-danger" onClick={this.handleLogout}>
          Đăng xuất
        </button>
      );
    }
    return (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Đăng nhập
      </button>
    );
  };
  handleLogin = () => {
    this.setState({ isLogin: true });
  };
  handleLogout = () => {
    this.setState({ isLogin: false });
  };
  render() {
    return (
      <div>
        <h2>Ex_DemoState</h2>
        {this.renderButton()}
      </div>
    );
  }
}

// isLogin true => render button đăng xuất
// isLogin false => render btton đăng nhập
