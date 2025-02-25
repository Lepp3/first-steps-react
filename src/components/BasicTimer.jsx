import { useEffect, useState } from "react";


export default function Timer(){
    
    const [isManual,setManual] = useState(false);
    const [time,setTime] = useState(()=>{
        return new Date().getSeconds()});
    
    setTimeout(() => {
        setTime(seconds => seconds + 1);
    }, 1000);

    // useEffect(()=>{
    //     setTimeout(() => {
    //         setTime(seconds => seconds +1);
    //         setManual(true);
    //     }, 1000);
    // })


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