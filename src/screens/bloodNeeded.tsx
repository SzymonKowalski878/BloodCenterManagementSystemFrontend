import styled from '@emotion/styled';
import React from 'react';
import {ReturnBloodTypes} from '../components/returnBloodTypes';
//import stanBardzoNiski from 'url:../images/stanBardzoNiski.png';
//import stanNiski from 'url:../images/stanNiski.png';
//import stanSredni from 'url:../images/stanSredni.png';
//import stanWysoki from 'url:../images/stanWysoki.png';


const Article = styled.div`
    padding: 20px;
    text-align: center;
    justify-content: center;
    h2 {
        color: #ff2003;
        font-size: 30px;
    };
`;


const Legend = styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
    border-top: 1px solid red;

`
const LegendItem = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const BloodNeeded: React.FC = () => {
    return(
        <Article>
            <h2>Zapotrzebowanie na krew</h2>
            <p><b>Stan na dzień 21.04.2021</b></p>
            
            <ReturnBloodTypes/>
            
            <p>Stan zapasów - Legenda</p>
            <Legend>
                <LegendItem>
                    <img src='https://i.imgur.com/l7rAJeL.png' width="40px" height="40px"/>
                    <p>Bardzo niski</p>
                </LegendItem>
                
                <LegendItem>
                    <img src='https://i.imgur.com/DU6TJ4D.png' width="40px" height="40px"/>
                    <p>Niski</p>
                </LegendItem>

                <LegendItem>
                    <img src='https://i.imgur.com/AZ0HDeh.png' width="40px" height="40px"/>
                    <p>Średni</p>
                </LegendItem>

                <LegendItem>
                    <img src='https://i.imgur.com/KEEiUE9.png' width="40px" height="40px"/>
                    <p>Wysoki</p>
                </LegendItem>
            </Legend>


        </Article>
    );
}