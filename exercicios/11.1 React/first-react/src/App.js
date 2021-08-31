import React from 'react';
import './App.css';


// import Component header that are made
import Name from './components/Name';
import TaskList from './components/TaskList';

class App extends React.Component {

  render() {
    return (
      <app>
        <Name />
        <TaskList />
      </app>
    );
  }
}

// export default always used for 1x element from 1x file 
// funçtion, component, or variable
export default App;
