import { useQuery } from 'react-query';
import React from 'react';
import {donationApi} from '../api/'
import {Link} from 'react-router-dom';
interface DonationStage{
    stage:string;
}
export const ReturnQueue:React.FC<DonationStage> = (props:DonationStage)=>{

    const query = useQuery(
        "ReturnQueue",
        ()=>donationApi.apiDonationReturnQueuePost(props.stage),
        {
            refetchOnWindowFocus:false,
            onSuccess:()=>{
                query.data?.map((donation)=>{
                    console.log(donation);
                })
            }
        },
    )

    return(
        <>
            {query.isSuccess?(
                <>
                    {query.data.map((donation)=>{
                        return <>
                         {`Imię: ${donation.bloodDonator?.user?.firstName} Nazwisko: ${donation.bloodDonator?.user?.surname} Pesel: ${donation.bloodDonator?.pesel} Data donacji: ${donation.donationDate?.getDate()} ${donation.donationDate?.getMonth()+1} ${donation.donationDate?.getFullYear()} `}
                         <Link to={`/donationDetails/:${donation.id}`}>Sczegóły</Link>
                         </>
                    })}
                </>
            ):(
                <>

                </>
            )}
        </>
    )
}