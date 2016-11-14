import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import the function that binds the actions to the reducers.
import { bindActionCreators } from 'redux';

// Get the functions that generate the proper 'actions'/events objects;
import { selectBook } from '../actions/index';

class BookList extends Component {
  constructor(props) {
    super();
    console.log('BookList#constructor', props);
  }
  render() {
    console.log('BookList#render');
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li onClick={() => this.props.selectBook(book)}
            key={book.title}
            className="list-group-item">{book.title}</li>
      );
    });
  }
}

// This will map the state properties/values to the props properties/value.
// The 'state' thats passed in, is the entire application state, that will need to
// filtered and the require values returned to be assigned to the Component's props.
function mapStateToProps(state) {
  console.log('BookList#mapStateToProps', state);
  // Whatever is returned will show up as props inside of BookList;
  // This returned object will essentially be set as the props of this Component
  return {
    books: state.books
  }
};


// dispatch is a function that will called to emit the action event to the reducers.
// anything returned from this function will end as 'props' on the BookList container.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers.
  // the 'dispatch' function is the emitter that will be called to send the action/event to reducers.
  // the 'selectBook' is the action/event creator function imported from actions.

  // EX: this.props.selectBook() - will create the action that will be 'dispatched',
  // with the value that will be passed, in this case the book object that will be clicked
  // will be passed to the 'selectBook' action creator, that then will be dispatched to
  // all of the reducers.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// This will wire up the 'mapStateToProps' handler to the 'BookList' Component.

// It will then export the 'connected' BookList Component.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);