import axios from 'axios';

const API_KEY = 'e069fbc05c7b0d1a6c249963838564d5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ro+uk+fr+sp+it+us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}