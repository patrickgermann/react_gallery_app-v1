import React, { Component } from 'react';
import './css/index.css';
import axios from 'axios';
import Nav from './Components/Nav';
import Photo from './Components/Photo';
import apiKey from './Components/config';


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
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        console.dir(response);
        this.setState({
          photos: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
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
