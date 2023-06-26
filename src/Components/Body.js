import React, { Component } from 'react';
import Navigation from './Navigation';
import Content from './Content';

export default class Body extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Navigation />
        </div>
        <div className="col-8">
          <Content />
        </div>
      </div>
    );
  }
}
