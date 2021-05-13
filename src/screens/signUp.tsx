import React from 'react';
import {RegisterAccount} from '../components/registerAccount';
import {PageContainer,InnerContainer} from '../components/common';
export const SignUp = () =>{
    return (
        <>
            <PageContainer>
                <InnerContainer>
                    <RegisterAccount/>
                </InnerContainer>
            </PageContainer>
        </>
    )
}