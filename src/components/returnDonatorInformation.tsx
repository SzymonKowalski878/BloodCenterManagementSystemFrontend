import { useQuery } from 'react-query';
import React from 'react';
import {bloodDonatorApi} from '../api';

export const ReturnDonatorInformation = () =>{
    const userId = localStorage.getItem("UserId");

    const query = useQuery(
        "ReturnDonatorInformation",
        ()=>bloodDonatorApi.apiBloodDonatorGetDonatorInformationPost({id:parseInt(userId as string)}),
        {
            onSuccess:()=>{
                console.log(query.data);
            }
        }
    )

    return (
        <>
            {query.isSuccess?(
                <>
                    Imie: {query.data.user?.firstName}<br/>
                    Nazwisko: {query.data.user?.surname}<br/>
                    Email: {query.data.user?.email}<br/>
                    Pesel: {query.data.pesel}<br/>
                    Adres zamieszkania: {query.data.homeAdress}<br/>
                    Numer telefonu: {query.data.phoneNumber}<br/>
                    Grupa krwi: {query.data.bloodType?.bloodTypeName}<br/>
                    Ilość oddanej krwi: {query.data.ammountOfBloodDonated}<br/>
                </>
            ):(
                <>

                </>
            )}
        </>
    )
}