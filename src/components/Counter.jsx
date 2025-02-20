import { useState } from "react";


export default function Counter(){
    const [count,setCount] = useState(0);

    const counterIncrementClickHandler = () =>{
        setCount(count + 1);
    }

    return(
        <>
        <h3>Counter</h3>
        <div>{count}</div>
        <button onClick={counterIncrementClickHandler}>+</button>
        </>
    )
}