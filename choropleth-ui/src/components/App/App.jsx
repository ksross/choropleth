import './App.css';
import React, { useEffect } from 'react';
//import axios from 'axios'
import Map from '../Map/Map';

function App() {
  useEffect(()=>{
    /* Disable API request for now
    axios.get(`${process.env.REACT_APP_API_URL}`).then(response => {
      console.log("SUCCESS", response)
    }).catch(error => {
      console.log(error)
    })
    */

  }, [])
  return (
    <div className="app">
      <Map></Map>
    </div>
  );
}

export default App;