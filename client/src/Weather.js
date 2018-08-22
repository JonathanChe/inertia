import React, { Component } from 'react';

const Weather = props => {
  return (
    <div id="weather">
      {props.weather}°
    <br/>
      Los Angeles
    </div>
  )
}

export default Weather
