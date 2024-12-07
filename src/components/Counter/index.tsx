import React,{useState} from "react";
import './style.css'
const Counter: React.FC = (props) =>{
    const [count,setCount] = useState(0)

    // const handleInc = (operation:string) =>{
    //     if(operation === 'increment'){
    //         setCount(count+1);
    //     }
    //     if(operation === 'decrement'){
    //         if(count === 0) return;
    //         setCount(count-1);
    //     }
        
    // }
    const handleIncrement = ()=>{
        setCount(count+1);
    }
    const handleDecrement = ()=>{
        if(count ===0) return 
        setCount(count-1);
    }
    return (
        <>
            <div className="counter-container">
                <h1>{count}</h1>
                {/* <button onClick={()=>handleInc('increment')} style={{backgroundColor:"green"}}>+</button>
                <button onClick={()=>handleInc('decrement')} style={{backgroundColor:"red"}}>-</button> */}
                <button onClick={handleIncrement} style={{backgroundColor:"green"}}>+</button>
                <button onClick={handleDecrement} style={{backgroundColor:"red"}}>-</button>
            </div>
        </>
    )
}

export default Counter;