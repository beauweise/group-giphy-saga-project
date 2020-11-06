import React, { Component } from "react";
import { connect } from "react-redux";

class Favorites extends Component {

  componentDidMount = () => {
    this.getFavorites();
  }

  getFavorites = () => {
    this.props.dispatch({type: 'GET_FAVORITES'});
  }

  render() {
    return (
      <div>
        <h1>Favorites</h1>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Favorites);
