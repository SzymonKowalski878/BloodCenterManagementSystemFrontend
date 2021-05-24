import React from 'react';
import styled from '@emotion/styled';


export const Container = styled.div`
    width:100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
`;
export const LittleBox = styled.div`
    max-width:50vw;
    min-height:45vh;
    margin:2vh 0 0 4vw;
`;
export const Labels = styled.div`
    min-width:25vw;
    min-height:45vh;
    display: flex;
    flex-direction: column;
    font-size: 2vh;
    line-height: 3.9vh;
    text-align: center;
    float:left;
    label{
        margin-left: 7vw;
        margin-top: 1vh;
    }
`;
export const Inputs = styled.div`
    max-width:25vw;
    max-height:45vh;
    display: flex;
    flex-direction: column;
    float: left;
    input{
        max-width: 8vw;
        height: 2vh;
        max-height: 2vh;
        margin-top: 2.4vh;
        margin-left: 2vh;
        font-size:1.5vh;
        text-align: center;
        border: 1px solid rgba(200,200,200,0.3);
        outline:none;
        box-shadow: 0 0 0.2vw rgba(15,15,15,0.19);
        transition:all,240ms ease-in-out;
    }
    input::placeholder{
    color:rgba(50,50,50,1);
    }
    input:focus::placeholder{
        color:rgba(50,50,50,0.5);
    }
    input:not(:last-of-type){
        border-bottom:1.5px solid rgba(200,200,200,0.4);
    }
    input:focus{
    outline:none;
    border-bottom:2px solid rgb(255,35,0);
    box-shadow: 0 5px 5px rgba(255,35,0,0.19);
    transform:scale(1.01);
}
`;
export const SubmitButton = styled.button`
    width:9vw;
    height:7vh;
    margin-left:16vw;
    color:#fff;
    font-size:1.5vh;
    font-weight:600;
    border:none;
    border-radius:10px 10px 10px 10px;
    cursor:pointer;
    transition:all,240ms ease-in-out;
    background: rgb(255,35,0);
    background-size:10rem;
    &:hover{
        filter:brightness(1.1);
        transform:scale(1.1);
    }
`;


export function Dataedit() {
    return(
        <Container>
           <LittleBox>
                <Labels>
                    <label>Telefon</label>
                    <label>E-mail</label>
                    <label>Ulica</label>
                    <label>Numer domu</label>
                    <label>Numer lokalu</label>
                    <label>Numer lokalu</label>
                    <label>Kod-Pocztowy</label>
                    <label>Miejscowość</label>
                </Labels>
                <Inputs>
                    <input type="text"></input>
                    <input type="mail"></input>
                    <input type="text"></input>
                    <input type="text"></input>
                    <input type="text"></input>
                    <input type="tex"></input>
                    <input type="text"></input>
                    <input type="text"></input>
                    <SubmitButton type="submit">Aktualizuj dane Krwiodawcy</SubmitButton>
                </Inputs>
            </LittleBox>
        </Container>
    )
}
