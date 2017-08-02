import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="row flex">
              <div className="inner-container">
                <h1 className="banner">Books N' Roses: Appetite for Instruction</h1>
                <div className="display">
                  <BookList/>
                  <BookDetail/>
                </div>
              </div>
            </div>
        );
    }
}

export default App;
