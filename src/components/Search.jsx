import React, { useContext, useState } from 'react'
import LocationContext from './context/locationContext';

export default function Search() {
  const [ location, setLocation ] = useState(""); 
  const context = useContext(LocationContext)
  const {setLocations} = context;

  const onChange = (e) => {
    setLocation(e.target.value);
  }

  const searchGeoLocation = async (event) => {
    event.preventDefault();
    const fetchedData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=80b9d8566767694d04a8f98456457361`);
    const data = await fetchedData.json();
    // console.log(data); 
    setLocations([...data]);
  }
  
  return (
    <div className='container'>
      <form> 
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Type the State</label>
          <input type="text" className="form-control" id="location" aria-describedby="emailHelp" name='location' value={location} onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={searchGeoLocation}>Submit</button>
        {/* <button type="submit" className="btn btn-primary" onClick={(e) => { e.preventDefault();console.log(locations)}}>Tiger</button> */}

      </form>
    </div>
  )
}
