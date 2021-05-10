import styled from '@emotion/styled';
import React from 'react';

//import phoneIkon from 'url:../images/phoneIkon.webp';

const Article = styled.div`
    padding: 50px;
    text-align: center;
    h2 {
        color: #ff2003;
        font-size: 30px;
    };
    p {
        font-weight: bold;
        align-items: center;
        text-align: center;
    }
`;




export const Contact: React.FC = () =>{
    return(
        <Article>
            <h2>Kontakt</h2>

            <p>Regionalne centrum krwiodastwa</p>

            <p>Chrząszczyżewoszyce powiat Łękołody</p>
            <p>
                Telefon: 666 789 987
            </p>
            <p>Email: SmartCode@mail.com</p>

            <p>Czynne od poniedziałku do piątku w godzinach od 7:00 do 15:30</p>
            <p>Rejestracja dawców od wtorku do piątku od 7:00 do 14:30 <br/> 
                a w soboty od 7:00 do 13:00.
            </p>

        </Article>
    );
}