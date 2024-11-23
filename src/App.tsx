import React from 'react';
import './index.css'
import Todo from './components/Todo';

const App : React.FC = () =>{
  return (
    <div>
        <h1>React Typescript</h1>
        <Todo/>
    </div>
  );
};

export default App;