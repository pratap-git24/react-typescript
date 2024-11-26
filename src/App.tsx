import React from 'react';
import './index.css'
import Todo from './components/Todo';

const allTodoItems = [
  {
    name:"Pratap",
    age:20
  },
  {
    name:"Pooja",
    age:30
  }
]
const App : React.FC = () =>{
  return (
    <div>
        <h1>React Typescript</h1>
        <Todo lists={allTodoItems}/>
    </div>
  );
};

export default App;