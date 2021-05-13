import React, { Component, useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import {bloodTypeApi} from '../api';
import styled from '@emotion/styled';
import VeryLowBlood from "url:../assets/VeryLowBlood.png";
const BloodIconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const BloodTypeNeededElement = styled.div`
    align-items: center;
    max-width: calc(35% - 20px);
    margin: 10px;
    padding: 10px 15px;
    font-weight: bold;

`;

export const ReturnBloodTypes =()=>{

    const query = useQuery(
        "getAllBloodTypes",
        ()=>bloodTypeApi.apiBloodTypeReturnAllBloodTypesGet(),
        {
            refetchOnWindowFocus:false,
            onSuccess:()=>{
                console.log(query.data);
            },
            onError:(error)=>{
                console.log(query.error);
            }
        }
    )

    return(
        <>
            {query.isLoading?(
                "loading"
            ):query.isSuccess?(
                <>
                    <BloodIconsContainer>
                        <BloodTypeNeededElement>
                            {query.data[0].ammountOfBloodInBank<=1800?(
                                <><img src="https://i.imgur.com/l7rAJeL.png" width="40px" height="40px"/></>
                            ):query.data[0].ammountOfBloodInBank>1800 && query.data[0].ammountOfBloodInBank<=3600?(
                                <><img src='https://i.imgur.com/DU6TJ4D.png' width="40px" height="40px"/></>
                            ):query.data[0].ammountOfBloodInBank>3600 && query.data[0].ammountOfBloodInBank<5400?(
                                <><img src='https://i.imgur.com/AZ0HDeh.png' width="40px" height="40px"/></>
                            ):(
                                <><img src='https://i.imgur.com/KEEiUE9.png' width="40px" height="40px"/></>
                            )}

                            <p>{query.data[0].bloodTypeName}</p>
                        </BloodTypeNeededElement>

                        <BloodTypeNeededElement>
                        {query.data[1].ammountOfBloodInBank<=1800?(
                                <><img src="https://i.imgur.com/l7rAJeL.png" width="40px" height="40px"/></>
                            ):query.data[1].ammountOfBloodInBank>1800 && query.data[1].ammountOfBloodInBank<=3600?(
                                <><img src='https://i.imgur.com/DU6TJ4D.png' width="40px" height="40px"/></>
                            ):query.data[1].ammountOfBloodInBank>3600 && query.data[1].ammountOfBloodInBank<5400?(
                                <><img src='https://i.imgur.com/AZ0HDeh.png' width="40px" height="40px"/></>
                            ):(
                                <><img src='https://i.imgur.com/KEEiUE9.png' width="40px" height="40px"/></>
                            )}
                            <p>{query.data[1].bloodTypeName}</p>
                            {console.log(query.data[1].bloodTypeName)}
                        </BloodTypeNeededElement>

                        <BloodTypeNeededElement>
                        {query.data[2].ammountOfBloodInBank<=1800?(
                                <><img src="https://i.imgur.com/l7rAJeL.png" width="40px" height="40px"/></>
                            ):(query.data[2].ammountOfBloodInBank>1800 &&  query.data[2].ammountOfBloodInBank<=3600)?(
                                <><img src='https://i.imgur.com/DU6TJ4D.png' width="40px" height="40px"/></>
                            ):query.data[2].ammountOfBloodInBank>3600 && query.data[2].ammountOfBloodInBank<5400?(
                                <><img src='https://i.imgur.com/AZ0HDeh.png' width="40px" height="40px"/></>
                            ):(
                                <><img src='https://i.imgur.com/KEEiUE9.png' width="40px" height="40px"/>
                                {console.log(`chuj ${query.data[2]}`)}</>
                            )}

                            <p>{query.data[2].bloodTypeName}</p>
                        </BloodTypeNeededElement>

                        <BloodTypeNeededElement>
                        {query.data[3].ammountOfBloodInBank<=1800?(
                                <><img src="https://i.imgur.com/l7rAJeL.png" width="40px" height="40px"/></>
                            ):query.data[3].ammountOfBloodInBank>1800 && query.data[3].ammountOfBloodInBank<=3600?(
                                <><img src='https://i.imgur.com/DU6TJ4D.png' width="40px" height="40px"/></>
                            ):query.data[3].ammountOfBloodInBank>3600 && query.data[3].ammountOfBloodInBank<5400?(
                                <><img src='https://i.imgur.com/AZ0HDeh.png' width="40px" height="40px"/></>
                            ):(
                                <><img src='https://i.imgur.com/KEEiUE9.png' width="40px" height="40px"/></>
                            )}

                            <p>{query.data[3].bloodTypeName}</p>
                            {console.log(query.data[3].bloodTypeName)}
                        </BloodTypeNeededElement>

                        <BloodTypeNeededElement>
                        {query.data[4].ammountOfBloodInBank<=1800?(
                                <><img src="https://i.imgur.com/l7rAJeL.png" width="40px" height="40px"/></>
                            ):query.data[4].ammountOfBloodInBank>1800 && query.data[4].ammountOfBloodInBank<=3600?(
                                <><img src='https://i.imgur.com/DU6TJ4D.png' width="40px" height="40px"/></>
                            ):query.data[4].ammountOfBloodInBank>3600 && query.data[4].ammountOfBloodInBank<5400?(
                                <><img src='https://i.imgur.com/AZ0HDeh.png' width="40px" height="40px"/></>
                            ):(
                                <><img src='https://i.imgur.com/KEEiUE9.png' width="40px" height="40px"/></>
                            )}
                            <p>{query.data[4].bloodTypeName}</p>
                        </BloodTypeNeededElement>

                        <BloodTypeNeededElement>
                        {query.data[5].ammountOfBloodInBank<=1800?(
                                <><img src="https://i.imgur.com/l7rAJeL.png" width="40px" height="40px"/></>
                            ):query.data[5].ammountOfBloodInBank>1800 && query.data[5].ammountOfBloodInBank<=3600?(
                                <><img src='https://i.imgur.com/DU6TJ4D.png' width="40px" height="40px"/></>
                            ):query.data[5].ammountOfBloodInBank>3600 && query.data[5].ammountOfBloodInBank<5400?(
                                <><img src='https://i.imgur.com/AZ0HDeh.png' width="40px" height="40px"/></>
                            ):(
                                <><img src='https://i.imgur.com/KEEiUE9.png' width="40px" height="40px"/></>
                            )}
                            <p>{query.data[5].bloodTypeName}</p>
                        </BloodTypeNeededElement>
                        
                        <BloodTypeNeededElement>
                        {query.data[6].ammountOfBloodInBank<=1800?(
                                <><img src="https://i.imgur.com/l7rAJeL.png" width="40px" height="40px"/></>
                            ):query.data[6].ammountOfBloodInBank>1800 && query.data[6].ammountOfBloodInBank<=3600?(
                                <><img src='https://i.imgur.com/DU6TJ4D.png' width="40px" height="40px"/></>
                            ):query.data[6].ammountOfBloodInBank>3600 && query.data[6].ammountOfBloodInBank<5400?(
                                <><img src='https://i.imgur.com/AZ0HDeh.png' width="40px" height="40px"/></>
                            ):(
                                <><img src='https://i.imgur.com/KEEiUE9.png' width="40px" height="40px"/></>
                            )}
                            <p>{query.data[6].bloodTypeName}</p>
                        </BloodTypeNeededElement>
                        
                        <BloodTypeNeededElement>
                        {query.data[7].ammountOfBloodInBank<=1800?(
                                <><img src="https://i.imgur.com/l7rAJeL.png" width="40px" height="40px"/></>
                            ):query.data[7].ammountOfBloodInBank>1800 && query.data[7].ammountOfBloodInBank<=3600?(
                                <><img src='https://i.imgur.com/DU6TJ4D.png' width="40px" height="40px"/></>
                            ):query.data[7].ammountOfBloodInBank>3600 && query.data[7].ammountOfBloodInBank<5400?(
                                <><img src='https://i.imgur.com/AZ0HDeh.png' width="40px" height="40px"/></>
                            ):(
                                <><img src='https://i.imgur.com/KEEiUE9.png' width="40px" height="40px"/></>
                            )}
                            <p>{query.data[7].bloodTypeName}</p>
                        </BloodTypeNeededElement>
                    </BloodIconsContainer>
                </>
            ):query.isError?(
                "Wystąpił błąd podczas pobierania danych"
            ):(
                "Coś"
            )}

        </>
    )
    
}