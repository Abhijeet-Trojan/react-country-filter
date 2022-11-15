import React, {useState} from 'react'
import CountryList from './CountryList';

function Search() {
  const [country, setCountry] = useState('');
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setCountry(data);
  }
    return (
      <>
        <input data-testid="filterInput" className="large" placeholder="Enter Country Name"
        onChange={inputEvent}
        value={country}
      />
      <CountryList name={country} />
      </>
  	);
}

export default Search;
