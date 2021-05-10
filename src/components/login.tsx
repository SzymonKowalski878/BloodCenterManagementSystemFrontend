import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { useMutation } from 'react-query';
import {userApi} from '../api'
import jwt_decode from 'jwt-decode'
import {TokenInterface} from '../interface/tokenInterface'

export const Login:React.FC =() =>{

    const [idState,setIdState] = React.useState("");
    const [passwordState,setPasswordState] = React.useState("");

    function checkIfParseInt(id:string){
        for(let i=0;i<id.length;i++){

            if(!parseInt(id.charAt(i)) && parseInt(id.charAt(i))!=0 ){
                return false;
            }
        }
        return true;
    }

    function onIdChange(event:ChangeEvent<HTMLInputElement>){
        if(checkIfParseInt(event.target.value)){
            setIdState(event.target.value);
        }
        else{
            setIdState(idState);
        }
    }

    function onPasswordChange(event:ChangeEvent<HTMLInputElement>){
        setPasswordState(event.target.value);
    }
    
    const mutation = useMutation(
        () =>userApi.apiUserLoginPost({id:parseInt(idState),password:passwordState.toString()}),
        {
            onSuccess:(mutation)=>{
                const decoded=jwt_decode(mutation.token as string);
                const token = mutation.token as string;
                const tokenData= decoded as TokenInterface;
                console.log(tokenData.unique_name+" " +tokenData.Role);
                localStorage.setItem("jwt",JSON.stringify(token));
            }
        }
    )

    const onSubmit = () =>{
        mutation.mutate();
    }
    return (
        <>
            <input type="text" value={idState} placeholder="id" onChange={onIdChange} id="idInput"></input><br/>
            <input type="password" value={passwordState} placeholder="password" onChange={onPasswordChange} id="passwordInput"></input><br/>
            <button onClick={onSubmit}>Zaloguj</button>
        </>
    )
}