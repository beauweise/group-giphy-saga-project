import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from "axios";
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
          this.props.dispatch({type: 'SET_SEARCH', payload: this.state})
 
        
    }

    addFavorite = (address) => {
      // console.log('address', address);
      // send address to store in database
      this.props.dispatch({type: 'ADD_FAVORITE', payload: address});
    }

  render() {
    return (
      <div>
        <h1>Search!</h1>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.submit}>Submit</button>
        <div>

          {/* {JSON.stringify(this.props.reduxState.reducer)} */}
          {this.props.reduxState.reducer.map((taco)=>{
              // return <p key = {taco.id}>{taco.url}</p>
            return (
              <>
                <iframe alt = '' key = {taco.id} src = {taco.embed_url}></iframe>
                <button onClick={()=>this.addFavorite(taco.embed_url)}>Favorite</button>
              </>
              )
          })}
          
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Search);
