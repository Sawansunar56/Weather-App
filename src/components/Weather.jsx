import React, { useContext } from 'react';
import WeatherItem from './WeatherItem';
import LocationContext from './context/locationContext';

export default function Weather() {
  const context = useContext(LocationContext);
  const { weathers } = context;

  return (
    <>
      {/* {console.log(weathers)} */}
      <div className='row'>

        { weathers.map((weather) => {
            return <div className='col-md-4'>
            <WeatherItem key={weather.id} weather={weather} />
          </div>
        })}
      </div>
    </>
  )
}  