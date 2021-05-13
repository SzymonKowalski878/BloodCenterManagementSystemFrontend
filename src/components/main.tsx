import styled from '@emotion/styled';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../screens/homePage';
import {Contact} from '../screens/contact';
import {BloodNeeded} from '../screens/bloodNeeded';
import {Informations} from '../screens/informations';
import {BloodDonatingProcess} from '../screens/bloodDonatingProcess';
import {SignUp} from '../screens/signUp';
import { SignIn } from '../screens/signIn';

export const StyledMain = styled.div`
    width: calc(100vw-100px);
    min-height: 100vh;
    background-color:white;
    text-align:center;
    grid-area: main;
    display:flex;
    justify-content:center;
    align-items:center;
`;

interface Props{
    isDarkColor: boolean;
}

export const Main: React.FC<Props> = (props: Props) => {
    const color =  props.isDarkColor===false?"white":"black";
    const fontcolor =  props.isDarkColor===false?"black":"white";
    return(
        <StyledMain style={{backgroundColor:color,color:fontcolor}}>
            <Switch>
                <Route path="/homepage" component={HomePage} exact/>  
                <Route path="/contact" component={Contact} exact/>
                <Route path="/bloodNeeded" component={BloodNeeded} exact/>
                <Route path="/informations" component={Informations} exact/>
                <Route path="/bloodDonatingProcess" component={BloodDonatingProcess} exact/>
                <Route path="/signUp" component={SignUp} exact/>
                <Route path="/signIn" component={SignIn} exact/>
            </Switch>
        </StyledMain>
    
    );
}


