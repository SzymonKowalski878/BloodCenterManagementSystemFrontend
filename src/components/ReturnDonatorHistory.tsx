import React from 'react';
import {useQuery} from 'react-query';
import {donationApi} from '../api';
export const ReturnDonatorHistory:React.FC = () =>{

    const userId= localStorage.getItem("UserId") as string;
    const query = useQuery(
        'returnDonatorHistory',
        ()=>donationApi.apiDonationReturnDonatorsAllDonationsPost({id:parseInt(userId)}),
        {
            
            refetchOnWindowFocus:false,
            onSettled:()=>{
                console.log("halo")
            },
            onSuccess:()=>{
                query.data?.map((donation)=>{
                    console.log(donation);
                })
            }
        }
    )

    return (
        <>
            {query.isSuccess?(
                <>
                    {query.data.map((donation)=>{
                        return <> {`Donacja z dnia ${donation.donationDate?.getMonth()+1}, status ${donation.stage} `}<br/></>
                    })}
                </>
            ):(
                <h1>Nie</h1>
            )}
        </>
    )
}
