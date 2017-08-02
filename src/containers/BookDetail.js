import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {
  constructor() {
    super();
  };

  render() {
    if(!this.props.book) {
      return <div className="detail-container select-book">Select a book to get started!</div>
    }
    return (
      <div className="col-md-4 detail-container">
        <h1 className="lighter"> Details for: </h1>
        <h1 className="title lighter">{this.props.book.title}</h1>
        <div className="bottom-spacing">{this.props.book.pages} pages</div>
        <div className="bottom-spacing">Author: {this.props.book.author}</div>
        <div className="bottom-spacing">Price: ${this.props.book.price} USD</div>
        <div className="bottom-spacing">Published: {this.props.book.published_date} by {this.props.book.publisher}</div>
        <div className="bottom-spacing">Genre: {this.props.book.category.join(", ")} </div>
      </div>
    );
  }
}

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}


export default connect(mapStateToProps)(BookDetail);
