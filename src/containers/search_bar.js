import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import {FETCH_WEATHER} from '../constants/actionType';
import fetchWeather from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
    console.log(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  onInputChange(event) {
    // console.log(event.target.value, FETCH_WEATHER);
    this.setState({ term: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <TextField type="search" value={this.state.term} className="Text" onChange={this.onInputChange} placeholder="Search..."/>
        <FlatButton type="submit" label="Search" primary={true} />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
