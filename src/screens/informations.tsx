import styled from '@emotion/styled';
import React from 'react';

//import phoneIkon from 'url:../images/phoneIkon.webp';

const Article = styled.div`
    padding: 50px;
    text-align: center;
    h2 {
        color: red;
        
        padding: 10px;
    };
    p{
        text-align: center;
        padding: 5px;
    }

`;

const InformationItem = styled.div`
    background: #fcfcff;
    text-align: left;
    padding: 20px;
    margin: 10px;
`;


const DepartureTable = styled.table`
    width: 100%;
    tr:nth-child(even) {background-color: #fcfcff;};
    tr:hover {background-color: #fcfcff;};
    th, td {
        padding: 15px;
        border-bottom: 1px solid #ddd;
    }
`



export const Informations: React.FC = () =>{
    return(
        <Article>
            <h2>Godziny Rejestracji</h2>
                <InformationItem>
                    Krew pełna:<br/>
                    Pn-Pt 7.00 - 17.30<br/><br/>
                    Płytki Krwi:<br/>
                    Pn-Pt 7.00 - 12.00<br/><br/>
                    Osocze:<br/>
                    Pn-Pt 7.00 - 16.00<br/>
                    Sobota 7.30-11.00
                </InformationItem>

                <h2>Szczepionka przeciwko COVID-19 a oddawanie krwi</h2>
                <InformationItem>
                    <ul>
                        <li>szczepionki Pfizer oraz Moderna:</li>
                        po szczepieniu - można zgłosić się do oddania krwi 
                        lub jej składników najwcześniej po <b>48 godzinach</b> od szczepienia
                        <li>szczepionki Astra Zeneca, Johnson&Johnson:</li>
                        po szczepieniu - można zgłosić się do oddania krwi 
                        lub jej składników najwcześniej po <b>14 dniach</b> od szczepienia.
                    </ul>
                    <p>
                        W przypadku wystąpienia jakichkolwiek objawów po szczepieniumożna
                         zgłosić się do oddania krwi lub jej składników najwcześniej po <b>7 dniach</b> od 
                         ustąpienia objawów.
                    </p>

                </InformationItem>

                <h2>Akcje wyjazdowe</h2>
                <DepartureTable>
                    <tr>
                        <th>DATA</th>
                        <th>MIEJSCOWOŚĆ</th>
                    </tr>
                    <tr>
                        <td>30.05.2021</td>
                        <td>Mrągowo</td>
                    </tr>
                    <tr>
                        <td>10.06.2021</td>
                        <td>Olsztyn</td>
                    </tr>
                    <tr>
                        <td>14.06.2021</td>
                        <td>Biskupiec</td>
                    </tr>
                    <tr>
                        <td>23.06.2021</td>
                        <td>Kętrzyn</td>
                    </tr>

                </DepartureTable>

        </Article>
    );
}