import React from 'react';
import './App.css';
import data from './data';

// document.getElementsByName('textColor')[0].addEventListener('change', () => {})

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      colorFilter: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      colorFilter: event.target.value
    });  
  }

  render(){
    console.log('Chamou')
    return (
      <div className="App">
        <input name="textColor" type="text" placeholder="Digite uma cor" onChange={this.handleChange} />
        <ul>
          {data.filter(({color}) => color.includes(this.state.colorFilter) ).map(({color, value}) => <li key={value}>{ color }</li> )}        
        </ul>
      </div>
    );
  }
}

export default App;
