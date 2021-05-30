import React from 'react';
import {ReturnQueue} from '../components/ReturnQueue';

export const BloodDonationQueue:React.FC = () =>{
    return(
        <>
            <ReturnQueue stage={"qualified"}/>
        </>
    )
}