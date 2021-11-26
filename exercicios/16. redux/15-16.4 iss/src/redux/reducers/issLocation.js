import { 
  RECEIVE_ISS_LOCATION, 
  RECEIVE_ISS_LOCATION_SUCESS, 
  REQUEST_ISS_LOCATION } from '../actions';

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  isFething: false,
}

const issLocation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_ISS_LOCATION:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      }
    case REQUEST_ISS_LOCATION: 
      return {
        ...state,
        isFething: true,
      }
    case RECEIVE_ISS_LOCATION_SUCESS:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        isFething: false,
      }
    default:
      return state;
  }
}

export default issLocation;