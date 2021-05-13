import React, { useState,ChangeEvent } from 'react';
import { useMutation } from 'react-query';
import {userApi} from '../api'
import { Link } from 'react-router-dom';
import { BoxContainer, TopContainer, BackDrop, FormContainer, Input, Span, SubmitButton, HeaderConstainer, HeaderText, SmallText } from './common';

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
        <BoxContainer>
            <TopContainer>
                <BackDrop/>
            </TopContainer>
            <HeaderConstainer>
                    <HeaderText>Załóż</HeaderText>
                    <HeaderText>konto</HeaderText>
                    <SmallText>Stwórz konto, aby kontynuować</SmallText>
                </HeaderConstainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
            </FormContainer>
            <SubmitButton>Zapisz się</SubmitButton>
            <Span>Wróć do <Link to="/signIn" style={{textDecoration:'none',color:'rgb(255,35,0)'}}>Logowania</Link></Span>
        </BoxContainer>
    )
}