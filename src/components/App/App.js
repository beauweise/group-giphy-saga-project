import React, { Component } from 'react';
import { connect } from "react-redux";
import Favorites from '../Favorites/Favorites';
import Search from "../Search/Search";


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Search/>
        <Favorites/>
      </div>
    );
  }
  
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(App);
