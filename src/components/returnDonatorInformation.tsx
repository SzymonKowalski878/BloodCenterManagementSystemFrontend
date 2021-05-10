import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';
import {bloodDonatorApi} from '../api'

interface Parameter{
    id:number;
}

export const ReturnDonatorInformation:React.FC<Parameter> = (paramter)=>{

    const [toDisplay,setToDisplay] = useState<string>();
    
    const query = useQuery(
        "ReturnDonatorInformation",
        ()=>bloodDonatorApi.apiBloodDonatorGetDonatorInformationPost({id:paramter.id}),
        {
            onSuccess:()=>{
                console.log(query.data)
                //nie wiem dlaczego to wyświetla w konsoli undefined po pierwszym renderze
            },
            refetchOnWindowFocus:false,

        },
    )
    
    
    useEffect(()=>{
        setToDisplay(`${query.data?.user?.firstName} ${query.data?.user?.surname} oddał ${query.data?.ammountOfBloodDonated} ml krwi`);
    },[query.data])
    
    
    return(
        <>
            <div>
                {toDisplay}
            </div>
        </>
    )
}