import React from 'react';
import { Map, Marker } from "pigeon-maps"
import { connect } from 'react-redux';

import { fetchISSLocation } from '../redux/actions';
import { getCurrentISSLocation } from '../services/issAPI';

/* 
 buscar a localização da estação espacial internacinal

*/


class ISSLocation extends React.Component {

  componentDidMount(){
    const { receiveIssLocation } = this.props;
    receiveIssLocation();

    this.time = setInterval(() => {
      receiveIssLocation();
    }, 2000)
  }

  componentWillUnmount(){
    clearInterval(this.time);
  }


  render() {
    const { latitude, longitude, loading } = this.props;

    return (
      <div>
        <Map 
          center={[0, 0]}
          defaultWidth={450}
          height={450}
          minZoom={1.5}
          maxZoom={8}
          zoom={1.5}
        >
          <Marker width={50} anchor={[latitude, longitude]} />
        </Map>
        { loading && <div>Loading</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    latitude: state.issLocation.latitude,
    longitude: state.issLocation.longitude,
    loading: state.issLocation.isFething
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveIssLocation: () => dispatch(fetchISSLocation()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);