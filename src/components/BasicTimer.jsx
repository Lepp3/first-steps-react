import { useEffect, useState } from "react";


export default function Timer(){
    const startingValue = 0;
    const [isManual,setManual] = useState(false);
    const [time,setTime] = useState(startingValue);
    
    setTimeout(() => {
        setTime(time+1);
    }, 1000);

    useEffect(()=>{
        setTimeout(() => {
            setTime(seconds => seconds +1);
            setManual(false);
        }, 1000);
    })


    const addTimeHandler = () => {
        setTime(seconds => seconds +10);
        setManual(true);
    }

    return(
        <>
        <h2>Timer</h2>
        <div>{time}</div>
        <hr/>
        </>
    )
}