import { useState } from "react";


export default function KillCounter(){
    const [count,setCount] = useState(0);

    const counterIncrementClickHandler = () =>{
        setCount(count + 1);
    }

    if(count>10){
        return(
            <>
            <h2>Godlike!</h2>
            <hr></hr>
            </>
        )
    }


    let titleElement = <h2>Kill Counter</h2>
    switch(count){
        case 1:
            titleElement = <h6>First blood!</h6>;
            break;
        case 2:
            titleElement = <h5>Double Kill!</h5>;
            break;
        case 3:
            titleElement = <h4>Triple Kill!</h4>;
            break;
        case 4:
            titleElement = <h3>Quadra Kill!</h3>;
            break;
        case 5:
            titleElement = <h2>PENTAKILL!</h2>;
            break;
        case 6:
            titleElement = <h1>GODLIKE!!!!</h1>;
            break;
    }




    return(
        <>
        {titleElement}
        <div>{count}</div>
        <button onClick={counterIncrementClickHandler}>+</button>
        </>
    )
}