import { useState, useEffect } from "react";


export default function InputTracker(){
    const [inputValue, setInputValue] = useState('');
    const [state,setState] = useState(false);

    useEffect (()=>{
        console.log('Current Input:', inputValue);
    }, [inputValue]);

    useEffect(()=>{
        console.log('Mounting');
    },[state])

    const buttonClickHandler = () =>{
        console.log('button clicked');

        setState((currentState) => !currentState);
    }

    const inputChangeHandler = (e) =>{
        setInputValue(e.target.value);
    }

    return(
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={inputChangeHandler}/>
            <button onClick={buttonClickHandler}>Update</button>
        </div>
    )
}