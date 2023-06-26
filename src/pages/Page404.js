import React, { Component } from 'react';
import { Navigate, redirect } from 'react-router-dom';

export default class Page404 extends Component {
  state = {
    trangThai: false,
  };

  render() {
    if (this.state.trangThai) {
      return <Navigate to="/home" replace={true} />;
    }

    return (
      <div>
        <img
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"
          alt=""
        />
        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({
              trangThai: true,
            });
          }}
        >
          Quay về trang chủ
        </button>
      </div>
    );
  }
}
