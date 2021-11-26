import { getCurrentISSLocation } from '../../services/issAPI';

export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION';
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const RECEIVE_ISS_LOCATION_SUCESS = 'RECEIVE_ISS_LOCATION_SUCESS';


export const receiveIssLocation = () => {
    return {
        type: RECEIVE_ISS_LOCATION,
        latitude: -4.56,
        longitude: -57.507,
    }
}

export const requestISSLocation = () => {
    return {
        type: REQUEST_ISS_LOCATION,
    }
}

export const receiveISSLocationSucess = (latitude, longitude) => {
    return {
        type: RECEIVE_ISS_LOCATION_SUCESS,
        latitude: latitude,
        longitude: longitude,
    }
}

export const fetchISSLocation = () => {
    return (dispatch, getState) => {
        dispatch(requestISSLocation());

        getCurrentISSLocation()
            .then(({ iss_position: {latitude, longitude}}) => {
                dispatch(receiveISSLocationSucess(latitude, longitude));
            });
    }
}

