import React from 'react';
import {bloodTypeApi} from '../api'
import {useMutation} from 'react-query';

export const ReturnBloodType:React.FC<{id:number}> =({id})=>{

    const mutation = useMutation(
        ()=>bloodTypeApi.apiBloodTypeReturnBloodTypeByIdPost({id})
    )

    if(mutation.isSuccess){
        
        console.log(mutation.data?.bloodTypeName+":"+mutation.data?.ammountOfBloodInBank );
    }

    const onSubmit = () =>{
        mutation.mutate();
    }

    return (
        <>
        <button onClick={onSubmit}>Halo</button>
        
        
        </>
    )
}