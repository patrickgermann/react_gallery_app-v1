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
      urls: [],
      loading: true
    }
  } 

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    const url =  `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`;  
    axios.get(url)
      .then(response => {
        //console.dir(response);
        this.makeURLarray(response.data.photos.photo);
        this.setState({
          loading: false,
          photos: response
        });
        console.log(this.photos);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


    //helper function to use in fetchSearchResults function
    makeURLarray(results) {
      const urls = results.map(
        result =>
          `https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}_m.jpg`
      );
      console.log(urls);
      this.setState({ urls });
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
