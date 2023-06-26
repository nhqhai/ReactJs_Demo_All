import React, { Component } from 'react';
import HomePage from './HomePage';
import { Outlet, useParams } from 'react-router-dom';

export default class Detail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Detail
        <Outlet />
      </div>
    );
  }
}
