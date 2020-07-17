import React, { Component } from 'react';
import './Css/bootstrap.min.css';
import WeatherInfo from './Componentes/WeatherInfo';
import WeatherForm from './Componentes/WeatherForm';
import {weather_KEY} from './keys';

class App extends Component{

  getWeather = async e => {
        e.preventDefault();
        const {city,country}= e.target.elements;
        const cityValue=city.value;
        const countryValue=country.value;
        const API_URL= "http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=22d48dc12393f52dde799e08729555c8"
        const response= await fetch(API_URL);
        const data= await response.json();
        console.log(data);
       
  }

  render(){
    return(
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <WeatherForm getWeather={this.getWeather}></WeatherForm>
            <WeatherInfo></WeatherInfo>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
