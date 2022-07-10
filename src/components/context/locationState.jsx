import LocationContext from "./locationContext";
import { useState } from "react";

const locationState = (props) => {
  
  const [ weathers, setWeathers ] = useState([{}]);
  const [ locations, setLocations ] = useState([]);
  
  // const getWeather = async (lat,lon) => {
  //   const fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=80b9d8566767694d04a8f98456457361`);
  //   const data = await fetchedData.json();
  //   return data;
  // }

  const weatherSetter = async () => {

    let newWeathers = [];

    /* This does not work but I don't know what's causing it. 
    The only thing I can predict is that it's because of the nesting of async function.
    which is delaying the output in the items of Weather Item. And the changed WeatherSetter to 
    an async function as well. */

    // locations.forEach(async (location) => {
    //   const fetchedData = await getWeather(location.lat, location.lon).then(result => result);
    //   // const lol = '' + location.lat + location.lon
    //   // console.log?(lol)
    //   newWeathers.push({...fetchedData.weather[0]});
    // })


    // This Code works, the put the functionality of getWeather inside a single function.
    for(let index = 0; index < locations.length; index++) {
      const {country, state, name} = locations[index];
      const fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locations[index].lat}&lon=${locations[index].lon}&appid=80b9d8566767694d04a8f98456457361`);
      const data = await fetchedData.json();
      console.log(data);
      newWeathers.push({...data.weather[0], country, state, name});
    }
    console.log(newWeathers);
    setWeathers(newWeathers);
  }

  return (
    <LocationContext.Provider value={{ weathers, setWeathers, locations, setLocations, weatherSetter }}>
      {props.children}
    </LocationContext.Provider>
  );
}

export default locationState;