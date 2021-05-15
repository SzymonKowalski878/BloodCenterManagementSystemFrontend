import React from 'react';
import {useQuery} from 'react-query';
import {donationApi} from '../api';
import styled from '@emotion/styled';

const HistoryOfDonation = styled.div`
    display:flex;
    justify-content:center;
    overflow:auto;
    flex-direction:column;
    width:70vw;
    height:80vh;
`;

const Result = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
`;

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
        <HistoryOfDonation>
            {query.isSuccess?(
                <>
                    {query.data.map((donation)=>{
                        return<> <Result> <div></div>{`Donacja z dnia ${donation.donationDate?.getMonth()}, status ${donation.stage} `}<div>&nbsp;Sczegóły</div></Result></>
                    })}
                </>
            ):(
                <h1>Nie</h1>
            )}
        </HistoryOfDonation>
    )
}
