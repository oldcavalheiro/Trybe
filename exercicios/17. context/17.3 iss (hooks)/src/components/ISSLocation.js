import React, { useContext, useEffect } from 'react';
import { Map, Marker } from 'pigeon-maps';
import ISSContext from '../context/ISSContext';

import useTimer from '../effects/useTimer';

const ONE_SECOND = 1000;

function ISSLocation() {
  const { latitude, longitude, fetchISSLocation } = useContext(ISSContext);

  useTimer(fetchISSLocation, ONE_SECOND);

  useEffect(() => {
    const now = new Date();
    document.title = now.toLocaleTimeString();
  });

  // useEffect(callback, []) ---> componentDidMount
  // useEffect(callback) ---> componetenDidMount + componentDidUpdate

  return (
    <div className="map">
      <Map
        center={ [0, 0] }
        defaultWidth={ 450 }
        height={ 350 }
        minZoom={ 1.5 }
        maxZoom={ 8 }
        zoom={ 1.5 }
      >
        <Marker width={ 50 } anchor={ [latitude, longitude] } />
      </Map>
      <div className="coordinates">
        <span>
          Latitude:
          {' '}
          {latitude}
        </span>
        <span>
          Longitude:
          {' '}
          {longitude}
        </span>
      </div>
    </div>
  );
}

export default ISSLocation;
