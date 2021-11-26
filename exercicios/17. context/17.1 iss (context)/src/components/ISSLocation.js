import React from 'react';
import { Map, Marker } from "pigeon-maps"
import ISSContext from '../context/ISSContext';

class ISSLocation extends React.Component {

  componentDidMount() {
    const { fetchISSLocation } = this.context;
    fetchISSLocation();


    this.time = setInterval(() => {
      fetchISSLocation();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }


  render() {
    const {latitude, longitude} = this.context;
    return (
      <div className="map">
        <Map
          center={[0, 0]}
          defaultWidth={450}
          height={350}
          minZoom={1.5}
          maxZoom={8}
          zoom={1.5}
        >
          <Marker width={50} anchor={[latitude, longitude]} />
        </Map>
        <div className="coordinates">
          <span>Latitude: {latitude}</span>
          <span>Longitude: {longitude}</span>
        </div>
      </div>
    )
  }
}

ISSLocation.contextType = ISSContext;

export default ISSLocation;