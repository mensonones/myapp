import React from 'react';
import './App.css';

import { RequestImages } from './services/requestImages/index';

function App() {
  // const res = useFetch("http://www.splashbase.co/api/v1/images/random", {});
  const res = RequestImages();
  if (!res.response) {
    return <div>Loading...</div>
  }
  const siteName = res.response.site
  const imageUrl = res.response.large_url
  return (
    <div className="App">
      <div>
        <h3>{siteName}</h3>
        <div>
          <img src={imageUrl} alt="avatar" style={{ width: 300 }}/>
        </div>
      </div>
    </div>
  );
}

export default App;
