import React from "react";

const Weather = props => (
  <div>
    {props.city && props.country && <p>Localização: {props.city}, {props.country}</p>}
    {props.temperature && <p>Temperatura: {props.temperature}</p>}               
    {props.humidity && <p>Umidade: {props.humidity}</p>}
    {props.description && <p>Condições: {props.description}</p>} 
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
