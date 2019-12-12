import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}> 
        <input type="text" name="city" placeholder="Cidade..."/>
        <input type="text" name="country" placeholder="País..."/>
        <button>Obter Clima</button>
    </form>
);

export default Form;
