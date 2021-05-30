import React from 'react';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
    min-height: 100vh;
    background-color:white;
    max-width:48em;
    @media only screen and (max-width: 414px) {
        width:4em;
    }
    @media only screen and (max-width: 1024px) {
        width:6em;
    }
`;

const ChooseOffice = styled.div`
    display:flex;
    justify-content:center;
    align-items: flex-start;
    position:relative;
    top:4em;
`;

const OfficeContainer = styled.div`
    display:flex;
    flex-direction: row;
    height:5em;   
    position:relative;
    top:5em;
    min-width:47em;
    justify-content:flex-start;
    align-items:center;
    @media only screen and (max-width: 1308px) {
        flex-direction:column;
        height:20em;
    }
    @media only screen and (max-width: 1024px) {
        flex-direction:column;
        height:20em;
        min-width:6em;
    }
    @media only screen and (max-width: 414px) {
        flex-direction:column;
        height:20em;
        min-width:4em;
    }
`;

const OfficePosition = styled.div`
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

export const WorkerMain =()=>{

    const history = useHistory();
    //const role = localStorage.getItem("Role");
    const role = "Worker"
    return (
        <Container>
            {role=="Worker"?(
                <>
                    <ChooseOffice>Wybierz stanowisko</ChooseOffice>
                    <OfficeContainer>
                        <OfficePosition>Recepcja</OfficePosition>
                        <OfficePosition>Stanowisko badania krwi</OfficePosition>
                        <OfficePosition>Stanowisko lekarza</OfficePosition>
                        <OfficePosition onClick={()=>history.push("/bloodDonationQueue")}>Stanowisko pobrania krwi</OfficePosition>
                    </OfficeContainer>
                </>
            ):(
                <></>
            )}
        </Container>
    )
}