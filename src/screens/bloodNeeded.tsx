import styled from '@emotion/styled';
import React from 'react';

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
            <BloodIconsContainer>
                <BloodTypeNeededElement>    
                    <img src='https://picsum.photos/seed/picsum/200/300' width="40px" height="40px"/>
                    <p>0 Rh-</p>
                </BloodTypeNeededElement>

                <BloodTypeNeededElement>
                <img src='https://picsum.photos/seed/picsum/200/300' width="40px" height="40px"/>
                    <p>0 Rh+</p>
                </BloodTypeNeededElement>

                <BloodTypeNeededElement>
                <img src='https://picsum.photos/seed/picsum/200/300' width="40px" height="40px"/>
                    <p>AB Rh-</p>
                </BloodTypeNeededElement>

                <BloodTypeNeededElement>
                <img src='https://picsum.photos/seed/picsum/200/300' width="40px" height="40px"/>
                    <p>AB Rh+</p>
                </BloodTypeNeededElement>

                <BloodTypeNeededElement>
                <img src='https://picsum.photos/seed/picsum/200/300' width="40px" height="40px"/>
                    <p>B Rh-</p>
                </BloodTypeNeededElement>

                <BloodTypeNeededElement>
                <img src='https://picsum.photos/seed/picsum/200/300' width="40px" height="40px"/>
                    <p>B Rh+</p>
                </BloodTypeNeededElement>
                
                <BloodTypeNeededElement>
                <img src='https://picsum.photos/seed/picsum/200/300' width="40px" height="40px"/>
                    <p>A Rh+</p>
                </BloodTypeNeededElement>
                
                <BloodTypeNeededElement>
                <img src='https://picsum.photos/seed/picsum/200/300' width="40px" height="40px"/>
                    <p>A Rh+</p>
                </BloodTypeNeededElement>
            </BloodIconsContainer>
            
            <p>Stan zapasów - Legenda</p>
            <Legend>
                <LegendItem>
                    <img src='https://picsum.photos/seed/picsum/200/300' width="20px" height="20px"/>
                    <p>Bardzo niski</p>
                </LegendItem>
                
                <LegendItem>
                    <img src='https://picsum.photos/seed/picsum/200/300' width="20px" height="20px"/>
                    <p>Niski</p>
                </LegendItem>

                <LegendItem>
                    <img src='https://picsum.photos/seed/picsum/200/300' width="20px" height="20px"/>
                    <p>Średni</p>
                </LegendItem>

                <LegendItem>
                    <img src='https://picsum.photos/seed/picsum/200/300' width="20px" height="20px"/>
                    <p>Wysoki</p>
                </LegendItem>
            </Legend>


        </Article>
    );
}