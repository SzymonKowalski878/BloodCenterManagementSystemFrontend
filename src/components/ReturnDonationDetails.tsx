import React from 'react';
import {useQuery} from 'react-query';
import {donationApi} from '../api/index';
import styled from '@emotion/styled';

const Content = styled.div`
    display:flex;
    flex-direction:column;
    width:60vw;
    margin-bottom:3em;
    @media only screen and (max-width: 1000px) {
        font-size:12px;
        width:90vw;
    }
    @media print {
        margin:0;
        table{
            font-size:30px;
        }
    }
`;

const H2styled =styled.h2`
    @media print{
        font-size:25px;
        margin-left:8em;
    }
`;

const PrintButton = styled.button`
    width:10em;
    height:3.5em;
    color:#fff;
    margin-top:2em;
    margin-bottom:1em;
    font-size:1.5vh;
    font-weight:600;
    border:none;
    margin-left:25vw;
    border-radius:10px 10px 10px 10px;
    cursor:pointer;
    transition:all,240ms ease-in-out;
    background: rgb(255,35,0);
    background-size:10rem;
    &:hover{
        filter:brightness(1.80);
        transform:scale(1.03);
    }
    @media print{
        display:none;
    }
`;

export const ReturnDonationDetails:React.FC<{id:number}> =({id})=>{
    const query = useQuery(
        "ReturnDonationDetails",
        ()=>donationApi.apiDonationReturnDonationDetailsPost({id:id}),
    )
    let stan
    switch(query.data?.stage){
        case "registered": stan = "donacja zarejestrowana"; break;
        case "blood examinated": stan = "krew zbadana"; break;
        case "qualified": stan = "zakwalifikowano"; break;
        case "not qualified": stan = "nie zakwalifikowano"; break;
        case "abandoned": stan = "nie przystąpiono"; break;
        case "donation finished": stan = "donacja zakończona"; break;
    }

    return (
        <Content>
           {query.isSuccess?(
           <>
               <H2styled>Etap donacji: {stan}</H2styled>
               <H2styled>Data donacji: {query.data.donationDate?.toLocaleDateString().substring(0,10)}</H2styled>
               {
                   query.data.stage=="not qualified"?(
                    query.data.rejectionReason=="blood pressure"?(
                        <H2styled>Powód odrzucenia: Ciśnienie krwi</H2styled>
                    ): query.data.rejectionReason=="blood examination"?(
                        <H2styled>Powód odrzucenia: Badanie krwi</H2styled>
                    ):(
                        <>

                        </>
                    )
                   ):(
                       <>

                       </>
                   )
               }
                {query.data.stage=="donation finished" || query.data.stage=="qualified" || (query.data.stage=="abandoned" && query.data.rejectionReason=="qualified" ) || (query.data.stage=="not qualified" && query.data.rejectionReason=="blood pressure")?(
                    <>
                        <table>
                            <tr>
                                <th>Nazwa</th><th>Twoje wyniki</th><th>Jednostka</th><th>Norma</th>
                            </tr>
                            <tr>
                                <td>Wzrost</td><td>{query.data.resultOfExamination?.height} </td><td>cm</td><td>--</td>
                            </tr>
                            <tr>
                                <td>Waga</td><td>{query.data.resultOfExamination?.weight} </td><td>kg</td><td>--</td>
                            </tr>
                            <tr>
                                <td>Cisnienie</td><td>{query.data.resultOfExamination?.bloodPressureUpper}/{query.data.resultOfExamination?.bloodPressureLower}</td><td>mm Hg</td> <td>90-135/50-90</td>
                            </tr>
                            <tr>
                                <td>HT:</td> <td>{query.data.resultOfExamination?.ht}</td> <td>%</td> <td>38-50</td>
                            </tr>
                            <tr>
                                <td>LY:</td> <td>{query.data.resultOfExamination?.ly}</td> <td>%</td> <td>17-44</td>
                            </tr>
                            <tr>
                                <td>MCH:</td> <td>{query.data.resultOfExamination?.mch}</td> <td>pg</td> <td>24, 3-33, 2</td>
                            </tr>
                            <tr>
                                <td>MCHC:</td> <td>{query.data.resultOfExamination?.mchc}</td> <td>g/dl</td> <td>31-38</td>
                            </tr>
                            <tr>
                                <td>MCV:</td> <td>{query.data.resultOfExamination?.mcv}</td> <td>fl</td> <td>73, 7-97</td>
                            </tr>
                            <tr>
                                <td>MO:</td> <td>{query.data.resultOfExamination?.mo}</td> <td>%</td> <td>4-13</td>
                            </tr>
                            <tr>
                                <td>NE:</td> <td>{query.data.resultOfExamination?.ne}</td> <td>%</td> <td>48-70</td>
                            </tr>
                            <tr>
                                <td>PLT:</td> <td>{query.data.resultOfExamination?.plt}</td> <td>x10^9/L</td> <td>150-450</td>
                            </tr>
                            <tr>
                                <td>RBC:</td> <td>{query.data.resultOfExamination?.rbc}</td> <td>x10^12/L</td> <td>3, 8-5, 5</td>
                            </tr>
                            <tr>
                                <td>WBC:</td> <td>{query.data.resultOfExamination?.wbc}</td> <td>x10^9/l</td> <td>4-10</td>
                            </tr>
                            <tr>
                                <td>BA:</td> <td>{query.data.resultOfExamination?.ba}</td> <td>%</td> <td>0-2</td>
                            </tr>
                            <tr>
                                <td>EO:</td> <td>{query.data.resultOfExamination?.eo}</td> <td>%</td> <td>0,1-6</td>
                            </tr>
                            <tr>
                                <td>HB</td><td>{query.data.resultOfExamination?.hb}</td> <td>g/dl</td> <td>12,5-17,0</td>
                            </tr>
                        </table>
                        <PrintButton onClick={window.print}>Drukuj</PrintButton>
                    </>
                ):query.data.stage=="blood examined" || (query.data.stage=="abandoned" && query.data.rejectionReason=="blood examined") || (query.data.stage=="not qualified" && query.data.rejectionReason=="blood examination")?(
                    <>
                        <table>
                            <tr>
                                <th>Nazwa</th><th>Twoje wyniki</th><th>Jednostka</th><th>Norma</th>
                            </tr>
                            <tr>
                                <td>HT:</td> <td>{query.data.resultOfExamination?.ht}</td> <td>%</td> <td>38-50</td>
                            </tr>
                            <tr>
                                <td>LY:</td> <td>{query.data.resultOfExamination?.ly}</td> <td>%</td> <td>17-44</td>
                            </tr>
                            <tr>
                                <td>MCH:</td> <td>{query.data.resultOfExamination?.mch}</td> <td>pg</td> <td>24, 3-33, 2</td>
                            </tr>
                            <tr>
                                <td>MCHC:</td> <td>{query.data.resultOfExamination?.mchc}</td> <td>g/dl</td> <td>31-38</td>
                            </tr>
                            <tr>
                                <td>MCV:</td> <td>{query.data.resultOfExamination?.mcv}</td> <td>fl</td> <td>73, 7-97</td>
                            </tr>
                            <tr>
                                <td>MO:</td> <td>{query.data.resultOfExamination?.mo}</td> <td>%</td> <td>4-13</td>
                            </tr>
                            <tr>
                                <td>NE:</td> <td>{query.data.resultOfExamination?.ne}</td> <td>%</td> <td>48-70</td>
                            </tr>
                            <tr>
                                <td>PLT:</td> <td>{query.data.resultOfExamination?.plt}</td> <td>x10^9/L</td> <td>150-450</td>
                            </tr>
                            <tr>
                                <td>RBC:</td> <td>{query.data.resultOfExamination?.rbc}</td> <td>x10^12/L</td> <td>3, 8-5, 5</td>
                            </tr>
                            <tr>
                                <td>WBC:</td> <td>{query.data.resultOfExamination?.wbc}</td> <td>x10^9/l</td> <td>4-10</td>
                            </tr>
                            <tr>
                                <td>BA:</td> <td>{query.data.resultOfExamination?.ba}</td> <td>%</td> <td>0-2</td>
                            </tr>
                            <tr>
                                <td>EO:</td> <td>{query.data.resultOfExamination?.eo}</td> <td>%</td> <td>0,1-6</td>
                            </tr>
                            <tr>
                                <td>HB</td><td>{query.data.resultOfExamination?.hb}</td> <td>g/dl</td> <td>12,5-17,0</td>
                            </tr>
                        </table>
                        <PrintButton onClick={window.print}>Drukuj</PrintButton>
                    </>
                ):(
                    <>

                    </>
                )}
               </>
           ):query.isLoading?(
                <>
                    Ładowanie
                </>
           ):(
               <>
                    Błąd
               </>
           )}
        </Content>
    )
}