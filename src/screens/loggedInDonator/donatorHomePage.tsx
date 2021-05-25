import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {DonatorMain} from '../../components/loggedInDonator/donatorHome';
import {ReturnDonationDetails} from '../../components/ReturnDonationDetails';
import {ReturnDonatorInformation} from '../../components/ReturnDonatorInformation';
export default function WorkerHomePage(){
    return(
        <div>
            <DonatorMain/>
            <ReturnDonatorInformation/>
        </div>
    );
}