import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';


injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SearchBar />
          <WeatherList />
        </div>
      </MuiThemeProvider>
    );
  }
}
