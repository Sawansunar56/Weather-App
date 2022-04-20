import React from 'react'

export default function WeatherItem(props) {

  const { main, description, icon, id } = props.weather;

  return (

    <div className="container my-2" id={id}>

      <div className="card" style={{ width: '15rem' }}>

        <div className="card-body">

          <h5 className="card-title">{main}</h5>

          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />

          <p className="card-text">{description}</p>

        </div>

      </div>

    </div>

  )

}





