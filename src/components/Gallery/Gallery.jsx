import React, { Component } from 'react';
import PhotoList from './PhotoList'; 

export default class Gallery extends Component {
  render() {
    return (
      <div className="content">
        <h1>Gallery</h1>
        <PhotoList />
      </div>
    );
  }
}
