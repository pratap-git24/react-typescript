import React from 'react';
import TodoItem from './TodoItem';
import './style.css'

interface allitems {
    name:string,
    age:number
}

interface propsItems {
    lists :allitems[]
}

const Todo : React.FC<propsItems> = (props) =>{
    return (     
        <div className='ol-container'>
            <ol>
                {
                    props.lists.map((item,i)=>(
                        <TodoItem key={item.age} title={item.name}/>
                    ))
                }                
            </ol>  
        </div>         
    );
};

export default Todo;