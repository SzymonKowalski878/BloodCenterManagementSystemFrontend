import { useMutation, useQuery } from 'react-query';
import React, { useState,ChangeEvent,useEffect} from 'react';
import {bloodDonatorApi,userApi} from '../api';
import styled from '@emotion/styled';

const Form = styled.form`
    display: flex;
    flex-direction: row;
    width:90vw;
`;

const LabelBox = styled.div`
    display: flex;
    flex-direction: column;
    width:50vw;
    align-items: flex-end;
    justify-content: space-evenly;
    font-size: 1em;
    label {
        margin: 1vh 1vw;
    }
`;

const InputBox = styled.div`
    display:flex;
    display: flex;
    flex-direction: column;
    width:50vw;
    align-items: flex-start;
    justify-content: space-evenly;
    input {
        height: 1em;
        font-size: 1em;
        margin: 1vh 1vw;
        border-radius: 0.2em;
    }
    @media only screen and (max-width: 850px) {
        input{
            width:50vw;
        }
    }
`;
const SubmitButton = styled.button`
    width:10em;
    height:3.5em;
    color:#fff;
    margin-top:0.4em;
    margin-bottom:1em;
    font-size:1.5vh;
    font-weight:600;
    border:none;
    border-radius:10px 10px 10px 10px;
    cursor:pointer;
    transition:all,240ms ease-in-out;
    background: rgb(255,35,0);
    background-size:10rem;
    &:hover{
        filter:brightness(1.80);
        transform:scale(1.03);
    }
`;

const BloodBox = styled.div`
    margin-bottom:0.5em;
`;

const H2Design = styled.h2`
    background-color: #ecf0f1;
    margin:0;
    width:99vw;
    margin-bottom:0.5em;
    border-top: 0.01em solid black;
    border-bottom: 0.01em solid black;
`;

export const ReturnDonatorInformation = () =>{
    const userId = localStorage.getItem("UserId");

    const [currentEmail,setCurrentEmail] = useState("");

    const [currentHomeAdress,setCurrentHomeAdress]=useState("");

    const [currentPhoneNumber,setCurrentPhoneNumber] = useState("");

    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword]= useState("");

    const query = useQuery(
        "ReturnDonatorInformation",
        ()=>bloodDonatorApi.apiBloodDonatorGetDonatorInformationPost({id:parseInt(userId as string)}),
        {
            refetchOnWindowFocus:false
        }
    )

    

    const mutationPersonalData = useMutation( 
        ()=>userApi.apiUserUpdateUserdataPost({id:2,phoneNumber:currentPhoneNumber,homeAdress:currentHomeAdress,email:currentEmail,password:""}),
    )

    const mutationPassword = useMutation(
        ()=>userApi.apiUserUpdateUserdataPost({id:2,phoneNumber:"",homeAdress:"",email:"",password:password})
    )


    const handlePassChange = () => {
        password===confirmPassword?(
            console.log(`${password} : ${confirmPassword}`),
            mutationPassword.mutate()
        ):(
            <>

            </>
        )

    }

    const updateEmailState= (event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
        setCurrentEmail(event.target.value);
    }

    const updateHomeAdressState = (event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
        setCurrentHomeAdress(event.target.value);
    }

    const updatePhoneNumber = (event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
        setCurrentPhoneNumber(event.target.value);
    }

    const updatePassword = (event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    const updateConfirmPassword =(event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
        setConfirmPassword(event.target.value);
    }

    useEffect(()=>{
        setCurrentEmail(query.data?.user?.email as string);
        setCurrentHomeAdress(query.data?.homeAdress as string); 
        setCurrentPhoneNumber(query.data?.phoneNumber as string);
    },[query.data])

    return (
        <div>
            {query.isSuccess?(
                <>
                    <H2Design>Edytuj dane personalne</H2Design>
                    <Form>
                        <LabelBox>
                            <label>Imie:</label>
                            <label>Nazwisko:</label>
                            <label>Email:</label>
                            <label>Nr telefonu:</label>
                            <label>Adres:</label>
                            <label>Pesel:</label>
                        </LabelBox>
                        <InputBox>
                        {/*}
                            <input type="text" value={(query.data?.user?.firstName)?query.data.user.firstName:""} /><br/>
                            <input type="text" value={(query.data?.user?.surname)?query.data.user.surname:""} /><br/>
                            <input type="email" value={(query.data?.user?.email)?query.data.user.email:""} /><br/>
                            <input type="text" value={(query.data?.pesel)?query.data.pesel:""} /><br/>
                            <input type="text" value={(query.data.homeAdress)?query.data.homeAdress:""} /><br/>
                            <input type="text" value={(query.data?.phoneNumber)?query.data.phoneNumber:""} /><br/>
                        */}
                            <input type="text" value={query.data.user?.firstName as string}/>
                            <input type="text" value={query.data.user?.surname as string}/>
                            <input type="text" value={currentEmail} onChange={updateEmailState} />
                            <input type="text" value={currentPhoneNumber} onChange={updatePhoneNumber}/>
                            <input type="text" value={currentHomeAdress} onChange={updateHomeAdressState}/>
                            <input type="text" value={query.data.pesel as string}/>
                        </InputBox>
                    </Form>
                    <SubmitButton onClick={()=>mutationPersonalData.mutate()}>Aktualizuj dane</SubmitButton>
                    <BloodBox> 
                        <label>Grupa krwi:</label> {query.data.bloodType?.bloodTypeName}<br/>
                        <label>Ilość oddanej krwi:</label>{query.data.ammountOfBloodDonated}ml<br/>
                        <label>Status honorowego dawcy:</label> {query.data.ammountOfBloodDonated}/7000 ml<br/>
                        <progress value={query.data.ammountOfBloodDonated} max="7000"></progress><br/>
                    </BloodBox>
                    <H2Design>Edytuj hasło</H2Design>
                    <Form>
                        <LabelBox>
                            <label>Nowe hasło:</label>
                            <label>Powtórz hasło:</label>
                        </LabelBox>
                        <InputBox>
                            <input type="password" value={password} onChange={updatePassword}/>
                            <input type="password" value={confirmPassword} onChange={updateConfirmPassword}/>
                        </InputBox>
                    </Form>
                    <SubmitButton onClick={()=>handlePassChange()}>Zmień hasło</SubmitButton>
                </>
            ):query.isLoading?(
                <>

                </>
            ):(
                <>
                    <h1>Loading</h1>
                </>
            )}
        </div>
    )
}