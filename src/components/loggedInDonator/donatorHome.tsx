import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width:48em;
    @media only screen and (max-width: 414px) {
        width:4em;
    }
    @media only screen and (max-width: 1024px) {
        width:6em;
    }
`;

const PanelOptions = styled.div`
    display:flex;
    flex-direction: row;
    height:5em;
    min-width:47em;
    justify-content:center;
    align-items:center;
    margin-top: 2vh;
    margin-bottom: 2vh;
    @media only screen and (max-width: 1308px) {
        flex-direction:column;
        height:10em;
    }
    @media only screen and (max-width: 1024px) {
        flex-direction:column;
        height:10em;
        min-width:6em;
    }
    @media only screen and (max-width: 414px) {
        flex-direction:column;
        height:10em;
        min-width:4em;
    }
`;

const Option = styled.div`
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    height:5em;
    width:12em;
    color: white; 
    background: red;
    border: 2px solid black;
    @media only screen and (max-width: 1308px) {
        height:4em;
        min-width:0em;
        width:15em;
    }
    @media only screen and (max-width: 1024px) {
        height:4em;
        min-width:0em;
        width:14em;
    }
`;

export const DonatorMain= () => {

    const HandleHistory = ()=>{
        window.location.href="/donatorHistory";
    }

    return(
        <Container>
            Panel Użytkownika
            <PanelOptions>
                <Option>Ustawienia konta</Option>
                <Option onClick={()=>HandleHistory()}>Historia donacji</Option>
            </PanelOptions>
        </Container>
    )
};