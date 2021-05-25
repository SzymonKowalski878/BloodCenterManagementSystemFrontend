import React from 'react';
import {useQuery} from 'react-query';
import {donationApi} from '../api/index';

export const ReturnDonationDetails:React.FC<{id:number}> =({id})=>{
    const query = useQuery(
        "ReturnDonationDetails",
        ()=>donationApi.apiDonationReturnDonationDetailsPost({id:id}),
        
        
    )
    return (
        <>
           {query.isSuccess?(
               <>
                {query.data.stage=="donation finished"?(
                    <>
                        <div>Etap donacji: {query.data.stage}</div>
                        <div>Data donacji: {query.data.donationDate?.getDate()} {query.data.donationDate?.getMonth()+1} {query.data.donationDate?.getFullYear()}</div>
                        <div>
                            <>
                                Wzrost: {query.data.resultOfExamination?.height}<br/>
                            </>
                            <>
                                Waga: {query.data.resultOfExamination?.weight}<br/>
                            </>
                            <>
                                Cisnienie {query.data.resultOfExamination?.bloodPressureUpper} na {query.data.resultOfExamination?.bloodPressureLower}
                            </>
                            <>
                                HT: {query.data.resultOfExamination?.ht}<br/>
                            </>
                            <>
                                LY: {query.data.resultOfExamination?.ly}<br/>
                            </>
                            <>
                                MCH: {query.data.resultOfExamination?.mch}<br/>
                            </>
                            <>
                                MCHC: {query.data.resultOfExamination?.mchc}<br/>
                            </>
                            <>
                                MCV: {query.data.resultOfExamination?.mcv}<br/>
                            </>
                            <>
                                MO: {query.data.resultOfExamination?.mo}<br/>
                            </>
                            <>
                                NE: {query.data.resultOfExamination?.ne}<br/>
                            </>
                            <>
                                PLT: {query.data.resultOfExamination?.plt}<br/>
                            </>
                            <>
                                RBC: {query.data.resultOfExamination?.rbc}<br/>
                            </>
                            <>
                                WBC: {query.data.resultOfExamination?.wbc}<br/>
                            </>
                            <>
                                BA: {query.data.resultOfExamination?.ba}<br/>
                            </>
                            <>
                                EO: {query.data.resultOfExamination?.eo}<br/>
                            </>
                            <>
                                HB: {query.data.resultOfExamination?.hb}<br/>
                            </>
                            
                        </div>
                    </>
                ):query.data.stage=="registered"?(
                    <>
                        <>Etap donacji: {query.data.stage}<br/></>
                        <>Data donacji: {query.data.donationDate?.getDate()} {query.data.donationDate?.getMonth()+1} {query.data.donationDate?.getFullYear()}</>

                    </>
                ):(
                    <>
                    </>
                )}
               </>
           ):(
                <>

                </>
           )}
        </>
    )
}