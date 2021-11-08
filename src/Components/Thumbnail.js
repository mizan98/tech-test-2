import React, { useState } from 'react';
import Axios from "axios";

function Thumbnail() {
  const [isShown, setIsShown] = useState(false);

 

  const getInfo = () => {
    Axios.get("https://images-api.nasa.gov/search?q=moon").then((response) => {
      console.log(response.data.collection.items);
    })
  }


  return (
    <div className="App">
      <div>
        <img 
        src="https://images-assets.nasa.gov/video/NHQ_2019_0311_Go%20Forward%20to%20the%20Moon/NHQ_2019_0311_Go%20Forward%20to%20the%20Moon~thumb.jpg" alt="display"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        </img>
        {isShown && (
        <div>
          <h1>Go Forward to the Moon</h1>
          <p>
          ASA is going to the Moon and on to Mars, in a measured, sustainable way. Working with U.S. companies and international partners, NASA will push the boundaries of human exploration forward to the Moon. 
          NASA is working to establish a permanent human presence on the Moon within the next decade to uncover new scientific discoveries and lay the foundation for private companies to build a lunar economy.  
          Right now, NASA is taking steps to begin this next era of exploration. #Moon2Mars  Learn more at: https://www.nasa.gov/moontomars
          </p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Thumbnail;