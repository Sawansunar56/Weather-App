import React, { useEffect, useState, useContext} from 'react'
import Search from './Search';
import Weather from './Weather';
import LocationContext from './context/locationContext';
import Navbar from './Navbar';

export default function Home() {
  const context = useContext(LocationContext);
  const { locations, weatherSetter } = context;

  useEffect(() => {
    // console.log(locations)

    // It's an async function but it doesn't return a data so await is not needed.
    weatherSetter();
  }, [locations])

  return (
    <>
    {/* <Navbar /> */}
    <div className="container">
        <Search />
        <Weather  />
      </div>
    </>
  )
}
