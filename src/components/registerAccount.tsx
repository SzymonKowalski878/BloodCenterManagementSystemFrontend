import React, { useState,ChangeEvent } from 'react';
import { useMutation } from 'react-query';
import {userApi} from '../api'

export const RegisterAccount = () =>{
    //Żeby móc zarejestrować nowe konto to w bazie musi istnieć dawca, który ma jakiś email
    const [emailState,setEmailState] = useState("");
    const [passwordState,setPasswordState] = useState("");

    function onEmailChange(event:ChangeEvent<HTMLInputElement>){
        setEmailState(event.target.value);
    }

    function onPasswordChange(event:ChangeEvent<HTMLInputElement>){
        setPasswordState(event.target.value);
    }

    const mutation = useMutation(
        ()=>userApi.apiUserRegisterAccountPost({email:emailState,password:passwordState}),
        {
            onSuccess:()=>{
                console.log(mutation.data)
            }
        }
    )

    const onSubmit = () =>{
        mutation.mutate();
    }

    return (
        <>
            <input type="text" value={emailState} placeholder="Email" onChange={onEmailChange} id="idInput"></input><br/>
            <input type="password" value={passwordState} placeholder="Password" onChange={onPasswordChange} id="passwordInput"></input><br/>
            <button onClick={onSubmit}>Zarejestruj</button>
        </>
    )
}