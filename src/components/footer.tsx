import styled from '@emotion/styled';
import React from 'react';

const StyledFooter = styled.footer`
    width: calc(100vw-100px);
    height: 15vh;
    background-color:black;
    text-align:center;
    grid-area: footer;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    @media print{
        display:none;
    }
`;

interface Props{
    isDarkColor: boolean;
}

export const Footer: React.FC<Props> = (props: Props) => {
    const color =  props.isDarkColor===false?"black":"gray";
    return(
        <StyledFooter style={{backgroundColor:color}}>
            SmartCode^SmartCode <br/>&copy; 2021
        </StyledFooter>
    );
}