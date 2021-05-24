import React from 'react';
import { Link } from 'react-router-dom';
import { BoxContainer, TopContainer, BackDrop, FormContainer, Input, Span, SubmitButton, HeaderConstainer, HeaderText, SmallText } from './common';

export function SignForm(){


    return <BoxContainer>
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
            <Span>Wróć do <Link to="/" style={{textDecoration:'none',color:'rgb(255,35,0)'}}>Logowania</Link></Span>
    </BoxContainer>
}