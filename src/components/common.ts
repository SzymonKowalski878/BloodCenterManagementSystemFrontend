import styled from '@emotion/styled';

export const PageContainer = styled.div`
    width:12rem;
    height: 20.8rem;
    display:flex;
    flex-direction: column;
    border-radius:19px;
    background-color:#fff;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position:relative;
    overflow:hidden;
`;

export const TopContainer = styled.div`
    width:1rem;
    height:1rem;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding:0 1.8rem;
    padding-bottom:5em;
`;

export const BackDrop = styled.div`
    width:18rem;
    height:18rem;
    position: absolute;
    display:flex;
    flex-direction:column;
    border-radius:50%;
    transform:rotate(30deg);
    transition:1.5s;
    top:-10rem;
    left:-5rem;
    z-index:2;
    background: rgb(255,35,0);
    background: linear-gradient(90deg, rgb(110,94,254 0%), rgba(73,63,252,1) 100%);
`;


export const HeaderConstainer = styled.div`
    width:12rem;
    position:absolute;
    top:1rem;
    left:0.3rem;
    display:flex;
    flex-direction:column;
`;

export const HeaderText = styled.h2`
    font-size:1.5rem;
    font-weight:600;
    line-height:1.24;
    color:#fff;
    z-index:10;
    margin:0;
`;

export const SmallText = styled.h5`
    color:#fff;
    font-weight:400;
    font-size:0.7rem;
    z-index:10;
    margin:0;
    margin-top:0.1rem;
`;

export const InnerContainer = styled.div`
    width:7.6rem;
    display:flex;
    flex-direction:column;
    padding:3em 1.6em;
`;

export const BoxContainer = styled.div`
    width:8rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:0.8rem;
`;

export const FormContainer = styled.form`
    width:8.5rem;
    display:flex;
    flex-direction:column;
`;

export const Span = styled.span`
    font-size:0.5rem;
    margin-top:0.6rem;
    color:rgba(70,70,70,0.8);
    font-weight:500;
    text-decoration:none;
    transition:all 200ms ease-in-out;
    cursor: pointer;
    &:hover{
        transform:scale(1.1);
    }
`;

export const BoldLink =styled.a`
    font-size:0.5rem;
    color:rgb(255,35,0);
    font-weight:500;
    text-decoration:none;
    transition:all 200ms ease-in-out;
`;

export const Input = styled.input`
    width:8rem;
    height:1.5rem;
    outline:none;
    font-size:0.8rem;
    border: 1px solid rgba(200,200,200,0.3);
    padding:0rem 0.6rem;
    margin-top:2px;
    border-bottom:1.4px solid transparent;
    box-shadow: 0 0 2.5px rgba(15,15,15,0.19);
    transition:all 200ms ease-in-out;
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
    width:8rem;
    height:1.4rem;
    margin-top:1rem;
    margin-left:0.7rem;
    color:#fff;
    font-size:0.5rem;
    font-weight:600;
    border:none;
    border-radius:100px 100px 100px 100px;
    cursor:pointer;
    transition:all,240ms ease-in-out;
    background: rgb(255,35,0);
    background: linear-gradient(90deg, rgb(110,94,254 0%), rgba(73,63,252,1) 100%);
    background-size:10rem;
    &:hover{
        filter:brightness(1.1);
        transform:scale(1.1);
        background-position:right;
    }
`;