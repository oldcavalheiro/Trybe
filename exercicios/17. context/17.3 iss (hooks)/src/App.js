import React, { useContext } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import PeopleInSpace from './components/PeopleInSpace';
import ToggleMap from './components/ToggleMap';
import ISSContext from './context/ISSContext';

function App() {
  const { showMap } = useContext(ISSContext);
  return (
    <div className="App">
      <h1>Localização da Estação Espacial Internacinal (ISS)</h1>
      <ToggleMap />
      { showMap && <ISSLocation /> }
      <PeopleInSpace />
    </div>
  );
}

export default App;
