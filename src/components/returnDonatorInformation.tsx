import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';
import {bloodDonatorApi} from '../api'

export const ReturnDonatorInformation:React.FC = ()=>{

    const [toDisplay,setToDisplay] = useState<string>();
    
    const userId = localStorage.getItem("UserId") as string;

    const query = useQuery(
        "ReturnDonatorInformation",
        ()=>bloodDonatorApi.apiBloodDonatorGetDonatorInformationPost({id:parseInt(userId)}),
        {
            onSuccess:()=>{
                console.log(query.data)
                
            },
            refetchOnWindowFocus:false,

        },
    )
    

    
    return(
        <>
            {query.isSuccess?(
                <>   
                    <div>
                        <div id="firstName">{`Imię: ${query.data.user?.firstName}`}</div>
                        <div id="surname">{`Nazwisko: ${query.data.user?.surname}`}</div>
                        <div id="email">{`Email: ${query.data.user?.email}`}</div>
                        <div id="bloodType">{`Grupa krwi ${query.data.bloodType?.bloodTypeName}`}</div>
                        <div id="phoneNumber">{`Numer telefonu ${query.data.phoneNumber}`}</div>
                        <div id="homeAdress">{`Adres zamieszkania ${query.data.homeAdress}`}</div>
                        
                    </div>
                </>
            ):(
                <>
                </>
            )}
        </>
    )
}