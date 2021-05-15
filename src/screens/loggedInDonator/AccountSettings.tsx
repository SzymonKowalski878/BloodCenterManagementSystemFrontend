import React from 'react';
import {ReturnDonatorInformation} from '../../components/ReturnDonatorInformation';
import {UserPanel} from '../../components/loggedInDonator/UserPanel';
export const AccountSettings:React.FC = () =>{
    return (
        <>
            <UserPanel/>
            <ReturnDonatorInformation/>
        </>
    )
    
}