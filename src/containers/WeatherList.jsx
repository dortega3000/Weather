import React, {Component} from 'react'
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import Map from '../components/Map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map((item) => item.main.temp);
    const humidity = cityData.list.map((item) => item.main.humidity);
    const pressure = cityData.list.map((item) => item.main.pressure);
    const {lon,lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td><Map lon={lon} lat={lat} /></td>
        <td><Chart data={temperatures} color="red" units="K"/></td>
        <td><Chart data={humidity} color="blue" units="hPa"/></td>
        <td><Chart data={pressure} color="green" units="%"/></td>
      </tr>
    );
  }
  render() {
    return (
      <div className="weather-list">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
