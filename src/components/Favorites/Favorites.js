import React, { Component } from "react";
import { connect } from "react-redux";

class Favorites extends Component {
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
