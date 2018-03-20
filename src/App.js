import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import logo from './logo.svg';
import './App.css';
import SongsListContainer from "./components/SongsListContainer";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTrack: "",
      orderById: false
    };
  }

  onSearch = (searchQuery, orderById) => {
    this.setState({
      searchTrack: searchQuery,
      orderById: orderById
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
          <br/>
          </div>
          <div className="row">
           <SearchForm onSearch={this.onSearch} />
           </div>
           <div className="row">
           <SongsListContainer
           orderById={this.state.orderById}
           searchTrack={this.state.searchTrack}
           />
           </div>
        </div>
      </div>
    );
  }
}

export default App;
