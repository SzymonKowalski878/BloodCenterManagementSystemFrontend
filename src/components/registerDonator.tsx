import React, { useState,ChangeEvent } from 'react'
import { useMutation } from 'react-query';
import {userApi} from '../api';

export const RegisterDonator = () =>{

    const [peselState,setPeselState] =useState("");
    const [homeAdress,setHomeAdressState] =useState("");
    const [phoneNumberState,setPhoneNumberState] =useState("");
    const [emailState,setEmailState] =useState("");
    const [firstnameState,setFirstnameState] =useState("");
    const [surnameState,setSurnameState] =useState("");

    function checkIfParseInt(id:string){
        for(let i=0;i<id.length;i++){

            if(!parseInt(id.charAt(i)) && parseInt(id.charAt(i))!=0 ){
                return false;
            }
        }
        return true;
    }

    const onPeselChange=(event:ChangeEvent<HTMLInputElement>)=>{
        if(checkIfParseInt(event.target.value)){
            setPeselState(event.target.value);
        }
        else{
            setPeselState(peselState);
        }
    }

    const onHomeAdressChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setHomeAdressState(event.target.value);
    }

    const onPhoneNumberChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setPhoneNumberState(event.target.value);
    }

    const onEmailChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setEmailState(event.target.value);
    }

    const onFirstNameChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setFirstnameState(event.target.value);
    }

    const onSurnameChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setSurnameState(event.target.value);
    }

    const mutation = useMutation(
        
        ()=>userApi.apiUserRegisterDonatorPost({pesel:peselState,
            homeAdress:homeAdress,
            phoneNumber:phoneNumberState,
            bloodType:{bloodTypeName:"0Rh+"},
            user:{email:emailState,firstname:firstnameState,surname:surnameState}}),
            {
                onSuccess:()=>{
                    console.log(mutation.data);
                }
            }
    )
    
    const onSubmit = () =>{
        mutation.mutate();
    }

    return (
        <>
        <br/><br/>
            <input type="text" value={peselState} placeholder="Pesel" onChange={onPeselChange} id="email"></input><br/>
            <input type="text" value={homeAdress} placeholder="Adres zamieszkania" onChange={onHomeAdressChange} id="homeAdress"></input><br/>
            <input type="text" value={phoneNumberState} placeholder="Numer telefonu" onChange={onPhoneNumberChange} id="phoneNumber"></input><br/>
            <input type="text" value={emailState} placeholder="Email" onChange={onEmailChange} id="email"></input><br/>
            <input type="text" value={firstnameState} placeholder="Imie" onChange={onFirstNameChange} id="firstName"></input><br/>
            <input type="text" value={surnameState} placeholder="Nazwisko" onChange={onSurnameChange} id="surname"></input><br/><br/><br/>
            <button onClick={onSubmit}>Zarejestruj</button><br></br>
            
        </>
    )
} 