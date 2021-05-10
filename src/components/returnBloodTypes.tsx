import React, { Component, useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import {bloodTypeApi} from '../api'

export const ReturnBloodTypes =()=>{

    type bloodProps ={
        id:number,
        bloodTypeName:string,
        ammountOfBlood:string
    }

    const [bloodTypes,setBloodTypes] = React.useState<
    Array<bloodProps>
    >([]);

    const addBloodTypes =(object:bloodProps)=>{
        setBloodTypes((curTypes)=>[...curTypes,{id:object.id,ammountOfBlood:object.ammountOfBlood,bloodTypeName:object.bloodTypeName}])
    }

    const query = useQuery(
        "getAllBloodTypes",
        ()=>bloodTypeApi.apiBloodTypeReturnAllBloodTypesGet(),
        {
            refetchOnWindowFocus:false,
            onSuccess:()=>{
                query.data?.map((x)=>{
                    addBloodTypes({id:x.id,ammountOfBlood:x.ammountOfBloodInBank,bloodTypeName:x.bloodTypeName})
                })

                
                //ale jak to wyświetlić? nie wiem
                //plus przy pierwszym requescie jest powodzenia ale dane w konsoli są undefined, dlaczego? nie wiem
            },
            onError:(error)=>{
                console.log(query.error);
            }
        }
    )

    return(
        <>
            {bloodTypes.map((item)=>{
                return <h1>{item.bloodTypeName}{item.ammountOfBlood}<br/></h1>
            })}
            
            {useEffect(()=>{
                bloodTypes.map((item)=>{
                    return <h1>{item.bloodTypeName}{item.ammountOfBlood}<br/></h1>
                })
            },[])}


        </>
    )
    
}