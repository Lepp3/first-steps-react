import { useEffect, useState } from "react";


export default function Timer(){
    
    const [isManual,setManual] = useState(false);
    const [time,setTime] = useState(()=>{
        return new Date().getSeconds()});
    
  

    useEffect(()=>{
        if(!isManual){
            setTimeout(() => {
                setTime(seconds => seconds + 1);
            }, 1000); 
            setManual(false);
        }
    },[time,isManual])


    const addTimeHandler = () => {
        setTime(seconds => seconds + 10);
        
    }

    return(
        <>
        <h2>Timer</h2>
        <div>{time}</div>
        <button onClick={addTimeHandler}>Add time</button>
        <hr/>
        </>
    )
}