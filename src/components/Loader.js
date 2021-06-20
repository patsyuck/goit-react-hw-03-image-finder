import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default class MyLoader extends Component {
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={500}
        width={500}
        /*timeout={3000}*/
      />
    );
  }
}
