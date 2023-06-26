import React, { Component } from 'react';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
export default class Home extends Component {
  state = {
    login: false,
  };
  chuyenHuongNguoiDung = () => {
    if (!this.state.login) {
      return <Navigate to="/home" />;
    }
  };
  render() {
    return (
      <div>
        {/* bs5-navbar-background  */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" href="" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </a> */}
                <button
                  onClick={this.chuyenHuongNguoiDung}
                  className="btn btn-danger"
                >
                  Go Home
                </button>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/home/detail">
                  Detail
                </a> */}
                {/* thuộc tính to giúp chuyển hướng tới các component được định nghĩa trong route mà không bị reload lại trang  */}
                <NavLink className="nav-link" to="/home/detail">
                  Detail
                </NavLink>
              </li>
              <li>
                <NavLink
                  // trong navLink có thể truyền một function vào style và className giúp xác định người dùng đang đứng ở path nào, nếu path trùng với path trong thuộc tính to của NavLink thì function đó sẽ có isActive == true
                  // có thể dùng isActive để xác định khi bằng true sẽ thêm các thuộc tính css vào
                  style={({ isActive }) => (isActive ? { color: 'blue' } : {})}
                  // style={{ color: 'red' }}
                  className={({ isActive, isPending }) =>
                    isActive ? 'nav-link bg-danger' : 'nav-link'
                  }
                  to="/home/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to={'/form'} className="nav-link">
                  React Form
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Outlet />
        <div className="bg-dark text-white text-center fs-3">Footer</div>
        {/* outlet đóng vai trò hiển thị các component của route con nằm bên trong route chính đang chứa component Home  */}
      </div>
    );
  }
}
