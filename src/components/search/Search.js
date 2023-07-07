import React from 'react'
import './Search.css'
import { useState } from "react";
import axios from "axios";

function Search() {

    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [sdata, setSdata] = useState({})

    const searchData = () => {
        const url = `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=fa1cf585-758f-4abf-8903-f770d03f6084`

        axios.get(url).then((response) => {
            setSdata(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='search'>
            <div className='searchbar'>
                <input
                value = {city}
                onChange={event => setCity(event.target.value)}
                placeholder="Enter City"
                type="text"
                required
                />
            </div>
            <div className='searchbar'>
            <input 
                value = {state}
                onChange={event => setState(event.target.value)}
                placeholder="Enter Province/State"
                type="text"
                required
                />
            </div>
            <div className='searchbar'>
                <input
                value = {country}
                onChange={event => setCountry(event.target.value)}
                placeholder="Enter Country"
                type="text"
                required
                />
            </div>
    
            <button type='submit' onClick={searchData}>Get Data</button>

            {/*{data && data.current && data.current.pollution && data.current.pollution.aqius ? (
                <p>{data.current.pollution.aqius}</p>*/}

            {sdata.data && sdata.data.current && sdata.data.current.pollution && sdata.data.current.pollution.aqius ? (
                <p className='aqi'>AQI: {sdata.data.current.pollution.aqius}</p>
            ) : null}
            {sdata.data && sdata.data.current && sdata.data.current.pollution && sdata.data.current.pollution.mainus ? (
                <p className='pol'>Pollutant: {sdata.data.current.pollution.mainus}</p>
            ) : null}
    </div>
  );
}

export default Search
