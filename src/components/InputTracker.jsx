import { useState, useEffect } from "react";


export default function InputTracker(){
    const [inputValue, setInputValue] = useState('');

    useEffect (()=>{
        console.log('Current Input:', inputValue);
    }, [inputValue]);

    return(
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}/>
        </div>
    )
}