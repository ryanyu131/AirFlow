import React from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Precautions from "./components/precautions/Precautions";
import Map from "./components/map/Map";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

function App() {
  
  /*const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [data, setData] = useState({})

  const searchData = () => {
    const url = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=fa1cf585-758f-4abf-8903-f770d03f6084`

    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }*/


  /*const getData = () => {
    axios.get(url).then(
      (response) => {
        console.log(response);
      }
    );
  }*/

  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <Precautions />
      <Map />
      <Search />
      <Footer />

      {/*<div className='search'>
          <input
          value = {city}
          onChange={event => setCity(event.target.value)}
          placeholder="Enter City"
          type="text"
          />
          <input
          value = {state}
          onChange={event => setState(event.target.value)}
          placeholder="Enter Province/State"
          type="text"
          />
          <input
          value = {country}
          onChange={event => setCountry(event.target.value)}
          placeholder="Enter Country"
          type="text"
          />
          <button onClick={searchData}>Get Data</button>
    </div>*/}

    </BrowserRouter>
  );
}


export default App;
