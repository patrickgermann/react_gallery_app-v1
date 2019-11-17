import React, { Component } from 'react';
import Nav from './Components/Nav';
import Photo from './Components/Photo';
import './css/index.css';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  } 

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    /* axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          photos: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      }); */
  }

  render() { 
    //console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Photo search</h1>
            <Nav onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>Loading...</p>
             : <Photo data={this.state.gifs} />
          }
        </div>
      </div>
    );
  }
}
