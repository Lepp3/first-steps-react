import { useState } from "react";

const wait = (time) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Wait is over!')
        }, time);
    })
}


export default function UnifiedControlledForm(){


    const [pending,setPending] = useState(false);
    const [formState,setFormState] = useState({});

    const submitHandler = async (e) =>{
        e.preventDefault();

        setPending(true);

        await wait(1500);


        setPending(false);
        console.log({username: formState.username, password: formState.password})
    }

    const changeHandler = (e) =>{
        setFormState(state=>({...state,[e.target.name]:e.target.value}));
    }

    return(
        <>
        <h2>Unified Controlled Form</h2>
        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor="username" >Username</label>
            <input type="text" 
            id="username"
            name="username" 
            onChange={changeHandler}></input>
            </div>
            <div>
            <label htmlFor="password" >Password</label>
            <input type="text" 
            id="password"
            name="password" 
            onChange={changeHandler}></input>
            </div>
            <input
            type="submit"
            value="submit"
            disabled={pending}/>
        </form>
        </>
    )
}