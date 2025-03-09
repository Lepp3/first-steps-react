import { useState } from "react";

const wait = (time) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Wait is over!')
        }, time);
    })
}


export default function ControlledForm(){


    const [pending,setPending] = useState(false);
    const [username,setUsername] = useState('');

    const submitHandler = async (e) =>{
        e.preventDefault();

        setPending(true);

        await wait(1500);


        setPending(false);
        console.log({username})
    }

    const usernameChangeHandler = (e) =>{
        console.log(e.target.name);
        setUsername(e.target.value);
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor="username" >Username</label>
            <input type="text" 
            id="username"
            name="username" 
            onChange={usernameChangeHandler}></input>
            </div>
            <input
            type="submit"
            value="submit"
            disabled={pending}/>
        </form>
    )
}