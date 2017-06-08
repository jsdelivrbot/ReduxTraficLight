import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectBook extends Component {
  render() {
    if(!this.props.selectedBook) {
      return (
        <h3>Please select a book from the list</h3>
      );
    }
    return (
      <div>
        <h3> Selected Book : </h3>
        <div>{this.props.selectedBook.title}</div>
      </div>
    );
  }
}

//whatever gets returned from here will be available as props in selected-book
// container
function mapStateToProps(state) {
  return {
    selectedBook : state.selectedBook
  }
}

export default connect(mapStateToProps)(SelectBook);
