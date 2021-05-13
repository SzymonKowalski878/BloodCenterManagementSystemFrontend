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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.7764583839603!2d20.487798215855335!3d53.79346608007515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27eb674666171%3A0x2d449321d0f6b34e!2sRegionalne%20Centrum%20Krwiodawstwa%20i%20Krwiolecznictwa!5e0!3m2!1spl!2spl!4v1620908853446!5m2!1spl!2spl" width="600" height="450" style={{border:0}} loading="lazy"></iframe>
            <p>Czynne od poniedziałku do piątku w godzinach od 7:00 do 15:30</p>
            <p>Rejestracja dawców od wtorku do piątku od 7:00 do 14:30 <br/> 
                a w soboty od 7:00 do 13:00.
            </p>

        </Article>
    );
}