import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import the function that binds the actions to the reducers.

import { bindActionCreators } from 'redux';

class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return <div>Select A book to get started</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('BookDetail#mapStateToProps', state);
  return {
    book: state.activeBook
  };
}
export default connect(mapStateToProps)(BookDetail);
