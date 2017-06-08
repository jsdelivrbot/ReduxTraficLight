import React from 'react';
import { Component } from 'react';
import BookList from '../containers/book-list';
import SelectBook from '../containers/selected-book';
import TraficLight from '../containers/trafic-light';
export default class App extends Component {
  render() {
    return (
      <div>
       <TraficLight />
      </div>
    );
  }
}
