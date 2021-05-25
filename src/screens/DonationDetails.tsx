import React from 'react';
import { useParams } from 'react-router';
import {ReturnDonationDetails} from '../components/ReturnDonationDetails';

export const DonationDetails:React.FC = ()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    let {donationId}  = useParams<{donationId:string}>(); 
    donationId=donationId.substr(1);
    console.log(donationId);
    return (
        <ReturnDonationDetails id={parseInt(donationId)}/>
    )
}