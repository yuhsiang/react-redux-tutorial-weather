import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  getWeatherBody() {
    const list = this.props.weather;
    return list.map((weather) => {
      const temperatures = weather.list.map(weather => weather.main.temp);
      const humidities = weather.list.map(weather => weather.main.humidity);
      const pressures = weather.list.map(weather => weather.main.pressure);
      const { lat, lon } = weather.city.coord;

      return (
        <TableRow key={weather.city.name}>
          <TableHeaderColumn>
            <GoogleMap lat={lat} lon={lon} />
          </TableHeaderColumn>
          <TableHeaderColumn>
            <Chart data={temperatures} color={'red'} />
          </TableHeaderColumn>
          <TableHeaderColumn>
            <Chart data={pressures} color={'green'} />
          </TableHeaderColumn>
          <TableHeaderColumn>
            <Chart data={humidities} color={'blue'} />
          </TableHeaderColumn>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>City</TableHeaderColumn>
            <TableHeaderColumn>Temperature</TableHeaderColumn>
            <TableHeaderColumn>Pressure</TableHeaderColumn>
            <TableHeaderColumn>Humidity</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.getWeatherBody()}
        </TableBody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {weather: state.weather};
}
export default connect(mapStateToProps)(WeatherList);
