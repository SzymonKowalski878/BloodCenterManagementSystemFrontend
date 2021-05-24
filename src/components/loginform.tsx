import React from 'react';
import { Link } from 'react-router-dom';
import { BoxContainer, TopContainer, BackDrop, FormContainer, Input, Span, SubmitButton,HeaderConstainer, HeaderText, SmallText } from './common';


export function LoginForm(){

    return <BoxContainer>
        <TopContainer>
            <BackDrop />
        </TopContainer>
        <HeaderConstainer>
                <HeaderText>Witaj</HeaderText>
                <SmallText>Zaloguj się, aby kontynuować</SmallText>
            </HeaderConstainer>
        <FormContainer>
            <Input type="text" placeholder="ID"/>
            <Input type="password" placeholder="Password"/>
        </FormContainer>
            <SubmitButton type="submit">Zaloguj się</SubmitButton>
            <Span>Nie masz konta? <Link to="/signform" style={{textDecoration:'none',color:'rgb(255,35,0)'}}>Zarejestruj się!</Link> </Span>         
    </BoxContainer>
}