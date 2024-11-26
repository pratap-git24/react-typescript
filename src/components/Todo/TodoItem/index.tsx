import React from "react";
import './style.css'

interface title{
    title:string
}

const TodoItem:React.FC<title> = (props) =>{
    return (        
        <li>
           {props.title}
        </li>        
    )
};

export default TodoItem;