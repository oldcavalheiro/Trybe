import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Player from './components/Player';
import Sidebar from './components/Sidebar';

import store from './store';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Provider store={store}>
          <Player />
          <Sidebar />  
        </Provider>      
      </div>
    );
  }
}

export default App;
