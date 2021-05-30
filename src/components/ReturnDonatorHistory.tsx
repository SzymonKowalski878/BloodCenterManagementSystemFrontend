import React from 'react';
import {useQuery} from 'react-query';
import {donationApi} from '../api';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
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
`;

const Results = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    min-height:20vh;
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

    return (<>
        
        <HistoryOfDonation>
        <h2>Historia twoich donacji</h2>
        <Results>
            {query.isSuccess?(
                <>
                    {query.data.map((donation)=>{
                        let stan
                        switch(donation.stage){
                            case "registered": stan = "donacja zarejestrowana"; break;
                            case "blood examinated": stan = "krew zbadana"; break;
                            case "qualified": stan = "zakwalifikowano"; break;
                            case "not qualified": stan = "nie zakwalifikowano"; break;
                            case "abandoned": stan = "nie przystąpiono"; break;
                            case "donation finished": stan = "donacja zakończona"; break;
                        }
                        return<> 
                        <Result> 
                            <details>
                                <summary>
                                    {`Donacja z dnia ${donation.donationDate?.toLocaleDateString().substring(0,10)}`} 
                                </summary> 
                                {`Status ${stan}`}
                                <br/>
                                <Link to={`/donationDetails/:${donation.id}`}>Sczegóły</Link>
                            </details>
                        </Result>
                        </>
                    })}
                </>
            ):(query.isLoading?(<h1>Ładowanie...</h1>):(
                <h1>Błąd</h1>)
            )}
        </Results>
        </HistoryOfDonation>
        </>
    )
}
