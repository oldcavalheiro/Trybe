import React from 'react';
import ISSContext from './ISSContext';
import { getCurrentISSLocation } from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      latitude: -25.4407,
      longitude: -49.2737,
      isFething: false,
    }

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
  }

  handleISSLocationSuccess(response){
    const { iss_position: {latitude, longitude} } = response;

    this.setState({
      latitude: latitude,
      longitude: longitude,
      isFething: false,
    })
  }

  async fetchISSLocation() {
    this.setState({ isFething: true })

    const response = await getCurrentISSLocation()
    this.handleISSLocationSuccess(response)
  }

  render() {
    return (
      <ISSContext.Provider value={ {...this.state, fetchISSLocation: this.fetchISSLocation } } >
        { this.props.children }
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;