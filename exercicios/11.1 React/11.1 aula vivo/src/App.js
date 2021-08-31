import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Header from './Header';

const element = (
  <h1 className="hello-world" >Olá mundo!</h1>
);

const element2 = React.createElement(
  'h1',
  {className: 'hello-world'},
  'Olá mundo!'
);

const myNewLove = (text) => {
  return (<h2>{text}</h2>)
}


class App extends React.Component {

  render(){
    return (
      <main> 
        <Header  />  
        {/* <HelloWorld /> */}
        { myNewLove('Bloco 11: Introdução à React')}
        { element }
        { element2 }
        <p>Este é meu primeiro App React</p>
      </main>    
    );
  } 
}

export default App;
