import React from 'react';
import './App.css';

class App extends React.component {
  constructor() {
    // super keyword is used to access and call functions on an object's parent. (MDN)
    super()
    this.handleClick = this.handleClick.bind(this) // binding handleClick() inside class
    this.state = {
      numberOfClicks: 0
    }
  }

  handleClick() {
    console.log(this)
    console.log('clicked!')
    // setState async for perfomance
    // component state can be only object
    this.setState((beforeState, _props) => ({
      numberOfClicks: beforeState.numberOfClicks + 1
    }))
  }

  render() {
    console.log(this)
    return <button onClick={ this.handleClick }> { this.state.numberOfClicks } </button>
  }
}

export default App;

// React Developer Tools for chrome (extension)

// props is data going from parent to children.
// state is data component.

// Podemos utilizar arrow functions dentro de um componente de classe?
// Sim, dessa forma não precisamos declarar o bind dentro do constructor, porém a aplicação se tornará menos performática.
