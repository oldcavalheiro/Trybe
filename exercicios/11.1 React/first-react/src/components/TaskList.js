import React from 'react';

const Task = (value) => {
  return (
    <li key={value}> {value} </li>
  );
}

/*
const Task = (value) => {
  return (<li> {value} </li>
  );
}
*/

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

/*
function App() {
  return (
    <ol>
      {tarefas.map((tarefa) => Task(tarefa))} ;
    </ol>
  );
} */

class Tasks extends React.Component {
  render() {
    return (
      <ul> {tarefas.map(tarefa => Task(tarefa))} </ul>
    );
  }
}

export default Tasks;
// export default App;