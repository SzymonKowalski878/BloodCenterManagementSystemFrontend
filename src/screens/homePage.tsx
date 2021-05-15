import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
    width:90vw;
`;

export default function HomePage(){
    return(
        <Container>
            <h1>Witaj na stronie Regionalnego Centrum Krwiodawstwa</h1>
            <hr/>
            <h1>U nas oddasz krew</h1>
        </Container>
    );
}