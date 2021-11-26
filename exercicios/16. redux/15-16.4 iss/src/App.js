import './App.css';
import ISSLocation from './components/ISSLocation';
import { Provider } from "react-redux";

import store from './redux/store'

function App() {
  return (
    <div className="App">
      <h1>Localização da Estação Espacial Internacinal (ISS)</h1>
      <Provider store={ store }>
        <ISSLocation />
      </Provider>
    </div>
  );
}

export default App;
