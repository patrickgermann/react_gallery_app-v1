import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
  
    const results = props.data;
    let gifs;
    if (results.length > 0) {
      gifs = results.map(gif => <Photo url={gif} key={results.indexOf(gif)} /> );
    } else {
      gifs = <NotFound />
    }
  
    
    return(
      <div className="photo-container">
        <ul>
            {gifs}
        </ul> 
      </div>
    );
  }

export default PhotoList;