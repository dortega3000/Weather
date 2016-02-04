import {FETCH_WEATHER} from '../action';

export default function WeatherReducer(state = [], action) {
  //console.log("Action Received", action);
  switch (action) {
    case FETCH_WEATHER:
      return [
        action.payload.data, ...state
      ];
  }
  return state;
}
