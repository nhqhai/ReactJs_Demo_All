import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

export default class Admin extends Component {
  render() {
    return (
      <div>
        Admin
        <Outlet />
      </div>
    );
  }
}
