import axios from 'axios';
import {FETCH_WEATHER} from '../constants/actionType';

const API_KEY = '3c64a775901028461c6cc026d6304290';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

function fetchWeather(city) {
  const url = `${BASE_URL}&q=${city},tw`;
  const request = axios.get(url);
  console.log(city);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export default fetchWeather;
