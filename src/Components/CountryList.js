import React from 'react';
import { response } from '../response';

function CountryList(props) {
  return (
    <section>
      <ul className="card country-list" data-testid="countryList">
        {response.filter((val) => { 
          if ( props.name == ""){
            return val
          } else if (val.toLowerCase().includes(props.name.toLowerCase())){
            return val
          }
        }).map((val) => {
          return (
            <li className='pa-10 pl-20'>{val}</li>
          )
        })}

      </ul>
    </section>
  );
}

export default CountryList;
