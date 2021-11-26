import React from 'react';
import ISSContext from './ISSContext';
import { getCurrentISSLocation, getPeopleInSpace } from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: -25.4407,
      longitude: -49.2737,
      isFething: false,
      showMap: true,
      peopleInSpace: [],
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
    this.fetchPeopleInSpace = this.fetchPeopleInSpace.bind(this);
  }

  handleISSLocationSuccess(response) {
    const { iss_position: { latitude, longitude } } = response;

    this.setState({
      latitude,
      longitude,
      isFething: false,
    });
  }

  async fetchISSLocation() {
    this.setState({ isFething: true });

    const response = await getCurrentISSLocation();
    this.handleISSLocationSuccess(response);
  }

  async fetchPeopleInSpace() {
    const people = await getPeopleInSpace();
    this.setState({ peopleInSpace: people.people });
  }

  toggleMap() {
    const { showMap } = this.state;
    this.setState({ showMap: !showMap });
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={ {
          ...this.state,
          fetchISSLocation: this.fetchISSLocation,
          toggleMap: this.toggleMap,
          fetchPeopleInSpace: this.fetchPeopleInSpace,
        } }
      >
        { children }
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;
