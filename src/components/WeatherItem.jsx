import React from 'react'

export default function WeatherItem(props) {

  const { main, description, icon, id, name, country, state } = props.weather;

  return (
    <div className="d-flex container my-2 " id={id}>
      <div className={`card text-dark bg-light shadow p-3 mb-5 bg-body rounded-3`} style={{width: "18rem"}}>
        <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title align-self-center">{name}</h5>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
        </div>
          <p className="card-text">{main} - {description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{country}</li>
          <li className="list-group-item">{state}</li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  )
}

WeatherItem.defaultProps = {
  main: ''
}





