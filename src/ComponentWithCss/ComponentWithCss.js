import React, { Component } from 'react';
// global css giúp css cho component, nhược điểm là tất cả các component khác có selector giống bên trong sẽ đều ăn css
// import './style.css';
import style from './style.module.css';

export default class ComponentWithCss extends Component {
  styleForComponent = 'bg-success text-white fs-1';
  render() {
    return (
      <div>
        {/* <h1 className={`${style.demo} bg-success fs-1`}>
          Tôi ở componentwithcss
        </h1> */}
        <h2 className={this.styleForComponent}>Demo Inline Css</h2>
        <h3 className={this.styleForComponent}>Lorem ipsum dolor sit amet.</h3>
      </div>
    );
  }
}
