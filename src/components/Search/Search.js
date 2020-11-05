import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import { response } from "express";

class Search extends Component {

    state = {
        input: ''
    }

    componentDidMount = () => {
    }

    
    handleChange = (event) => {        
        this.setState({
            input: event.target.value
        })
    }

    submit = () => {
        axios.post('/', this.state).then((response) => {
            console.log(response);
            
        })
        
    }


  render() {
    return (
      <div>
        <h1>Search!</h1>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Search);
