import React from 'react';
import './App.css';
import Github from './Components/Github'
import CounterHooks from './Components/CounterHooks'
import Todo from './ToDo_Hooks/todo'

function App() {
  return (
    <div className="App">
      <CounterHooks/>
      <Github/>
      <Todo/>
    </div>
  );
}

export default App;
