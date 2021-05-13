import styled from '@emotion/styled';

export const PageContainer = styled.div`
    width:12em;
    height: 20.8em;
    display:flex;
    flex-direction: column;
    border-radius:19px;
    background-color:#fff;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position:relative;
    overflow:hidden;
    align-items:center;
`;

export const TopContainer = styled.div`
    width:1em;
    height:1em;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding:0 1.8em;
    padding-bottom:5em;
`;

export const BackDrop = styled.div`
    width:18em;
    height:18em;
    position: absolute;
    display:flex;
    flex-direction:column;
    border-radius:50%;
    transform:rotate(30deg);
    top:-10em;
    left:-5em;
    z-index:2;
    background: rgb(255,35,0);
    background: linear-gradient(90deg, rgb(110,94,254 0%), rgba(73,63,252,1) 100%);
`;


export const HeaderConstainer = styled.div`
    width:12em;
    position:absolute;
    top:1em;
    left:0.3em;
    display:flex;
    flex-direction:column;
`;

export const HeaderText = styled.h2`
    font-size:1.5em;
    font-weight:600;
    line-height:1.24;
    color:#fff;
    z-index:10;
    margin:0;
`;

export const SmallText = styled.h5`
    color:#fff;
    font-weight:400;
    font-size:0.7em;
    z-index:10;
    margin:0;
    margin-top:0.1em;
`;

export const InnerContainer = styled.div`
    width:7.6em;
    display:flex;
    flex-direction:column;
    padding:3em 1.6em;
`;

export const BoxContainer = styled.div`
    width:8em;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:0.8em;
`;

export const FormContainer = styled.form`
    width:8.5em;
    display:flex;
    flex-direction:column;
`;

export const Span = styled.span`
    font-size:0.5em;
    margin-top:0.6em;
    color:rgba(70,70,70,0.8);
    font-weight:500;
    text-decoration:none;
    transition:200ms ease-in-out;
    cursor: pointer;
    &:hover{
        transform:scale(1.1);
    }
`;

export const BoldLink =styled.a`
    font-size:0.5em;
    color:rgb(255,35,0);
    font-weight:500;
    text-decoration:none;
    transition:200ms ease-in-out;
`;

export const Input = styled.input`
    width:8em;
    height:1.5em;
    outline:none;
    font-size:0.8em;
    border: 1px solid rgba(200,200,200,0.3);
    padding:0em 0.6em;
    margin-top:2px;
    border-bottom:1.4px solid transparent;
    box-shadow: 0 0 2.5px rgba(15,15,15,0.19);
    transition: 200ms ease-in-out;
    &::placeholder{
        color:rgba(50,50,50,1);
    }
    &:focus::placeholder{
        color:rgba(50,50,50,0.5);
    }
    &:not(:last-of-type){
        border-bottom:1.5px solid rgba(200,200,200,0.4);
    }
    &:focus{
        outline:none;
        border-bottom:2px solid rgb(255,35,0);
        box-shadow: 0 5px 5px rgba(255,35,0,0.19);
        transform:scale(1.01);
    }
`;

export const SubmitButton = styled.button`
    width:8em;
    height:1.4em;
    margin-top:1em;
    margin-left:0.7em;
    color:#fff;
    font-size:0.5em;
    font-weight:600;
    border:none;
    border-radius:100px 100px 100px 100px;
    cursor:pointer;
    transition:240ms ease-in-out;
    background: rgb(255,35,0);
    background: linear-gradient(90deg, rgb(110,94,254 0%), rgba(73,63,252,1) 100%);
    background-size:10em;
    &:hover{
        filter:brightness(1.1);
        transform:scale(1.1);
        background-position:right;
    }
`;