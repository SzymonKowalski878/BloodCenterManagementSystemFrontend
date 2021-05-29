import { useQuery } from 'react-query';
import React from 'react';
import {donationApi} from '../api/'
interface DonationStage{
    stage:string;
}
export const ReturnQueue:React.FC<DonationStage> = (props:DonationStage)=>{

    const query = useQuery(
        "ReturnQueue",
        ()=>donationApi.apiDonationReturnQueuePost(props.stage),
        {
            refetchOnWindowFocus:false
        }
    )

    return(
        <>

        </>
    )
}