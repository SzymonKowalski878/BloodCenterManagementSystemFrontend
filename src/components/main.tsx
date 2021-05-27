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
import SignOut from '../screens/signOut'
import WorkerHomePage from '../screens/loggedInWorker/workerHomePage';
import DonatorHomePage from '../screens/loggedInDonator/donatorHomePage';
import { ReturnDonatorHistory } from './ReturnDonatorHistory';
import {DonationDetails} from '../screens/DonationDetails';
import { PrivateRoute } from '../lib/PrivateRoute'
import { LoginRoute } from '../lib/LoginRoute'
import {PersonalDataSettings} from '../screens/loggedInDonator/PersonalDataSettings';

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
    isDarkColor: boolean,
}

export const Main: React.FC<Props> = (props: Props) => {
    const color =  props.isDarkColor===false?"white":"black";
    const fontcolor =  props.isDarkColor===false?"black":"white";
    
    return(
        <StyledMain style={{backgroundColor:color,color:fontcolor}}>
            <Switch>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/bloodNeeded" component={BloodNeeded} exact/>
                <Route path="/informations" component={Informations} exact/>
                <Route path="/bloodDonatingProcess" component={BloodDonatingProcess} exact/>
                <LoginRoute path="/signUp" component={SignUp} exact />
                <LoginRoute path="/signIn" component={SignIn} exact />
                <PrivateRoute path="/donatorHistory" component={ReturnDonatorHistory} exact role='Donator'/>
                <Route path="/homePage" component={HomePage} exact/>
                <PrivateRoute path="/homePageWorker" component={WorkerHomePage} exact role='Worker'/>
                <PrivateRoute path="/homePageDonator" component={DonatorHomePage} exact role='Donator'/>
                <PrivateRoute path="/donationDetails/:donationId" component={DonationDetails} exact role='Donator'/> 
                <Route path="/signOut" component={SignOut} exact/>
                <Route path="/personalDataSettings" component={PersonalDataSettings} exact/>
            </Switch>
        </StyledMain>
    
    );
}