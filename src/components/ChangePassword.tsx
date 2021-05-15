import React, { useState ,ChangeEvent} from 'react';
import {userApi} from '../api';
import {useMutation} from 'react-query';

export const ChangePassword:React.FC = () =>{
    
    const [newPassword,setNewPassword] = useState("");
    const [confirmNewPassword,setConfirmNewPassword] = useState("");

    const onNewChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setNewPassword(event.target.value);
    }

    const onConfirmChange =(event:ChangeEvent<HTMLInputElement>)=>{
        setConfirmNewPassword(event.target.value);
    }
    return (
        <>
            <input value={newPassword} type="password" placeholder="Nowe hasło" onChange={onNewChange}/><br/>
            <input value={confirmNewPassword}type="password" placeholder="Potwierdź nowe hasło" onChange={onConfirmChange}/>
        </>
    )
}