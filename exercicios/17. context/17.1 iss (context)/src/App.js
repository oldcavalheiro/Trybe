import React from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ISSProvider from './context/ISSProvider';



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Localização da Estação Espacial Internacinal (ISS)</h1>
        <ISSProvider>
          <ISSLocation/>
        </ISSProvider>        
      </div>
    );
  }
}

export default App;
