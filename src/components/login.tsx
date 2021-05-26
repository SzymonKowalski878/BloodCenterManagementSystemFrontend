import React, { ChangeEvent } from 'react'
import { useMutation } from 'react-query';
import {userApi} from '../api'
import jwt_decode from 'jwt-decode'
import {TokenInterface} from '../interface/tokenInterface'
import { BoxContainer, TopContainer, BackDrop, FormContainer, Input, Span, SubmitButton,HeaderConstainer, HeaderText, SmallText } from './common';
import { Link, useHistory } from 'react-router-dom';
import { queryHelpers } from '@testing-library/dom';
export const Login:React.FC =() =>{

    const history= useHistory();

    const [idState,setIdState] = React.useState("");
    const [passwordState,setPasswordState] = React.useState("");

    function checkIfParseInt(id:string){
        for(let i=0;i<id.length;i++){

            if(!parseInt(id.charAt(i)) && parseInt(id.charAt(i))!=0 ){
                return false;
            }
        }
        return true;
    }

    function onIdChange(event:ChangeEvent<HTMLInputElement>){
        if(checkIfParseInt(event.target.value)){
            setIdState(event.target.value);
        }
        else{
            setIdState(idState);
        }
    }

    function onPasswordChange(event:ChangeEvent<HTMLInputElement>){
        setPasswordState(event.target.value);
    }
    
    const mutation = useMutation(
        () =>userApi.apiUserLoginPost({id:parseInt(idState),password:passwordState.toString()}),
        {
            onSuccess:(mutation)=>{
                const decoded=jwt_decode(mutation.token as string);
                const token = mutation.token as string;
                const tokenData= decoded as TokenInterface;
                console.log(tokenData.unique_name+" " +tokenData.Role);
                localStorage.setItem("jwt",JSON.stringify(token));
                localStorage.setItem("Role",tokenData.Role);
                localStorage.setItem("UserId",tokenData.unique_name);
                localStorage.setItem("IsLoggedIn","true");
                tokenData.Role=="Worker"?(
                    history.push("/homePageWorker")
                ):(tokenData.Role=="Donator"?(
                    history.push("/homePageDonator")
                ):(
                    history.push("/homePage")
                ))
                history.go(0)
            }
        }
    )

    const onSubmit = () =>{
        mutation.mutate();
    }
    return (
            <BoxContainer>
                <TopContainer>
                    <BackDrop />
                </TopContainer>
                <HeaderConstainer>
                        <SmallText>Zaloguj się, aby kontynuować</SmallText>
                    </HeaderConstainer>
                <FormContainer>
                    <Input type="text" placeholder="Numer legitymacji" value={idState} onChange={onIdChange} id="idInput"/>
                    <Input type="password" placeholder="Hasło" value={passwordState} onChange={onPasswordChange} id="passwordInput"/>
                </FormContainer>
                    <SubmitButton type="submit" onClick={()=>onSubmit()}>Zaloguj się</SubmitButton>
                    <Span>Nie masz konta? <Link to="/signUp" style={{textDecoration:'none',color:'rgb(255,35,0)'}}>Zarejestruj się!</Link> </Span>
            </BoxContainer>
    )
}