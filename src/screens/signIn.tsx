import React from 'react';
import {Login} from '../components/login';
import {PageContainer,InnerContainer} from '../components/common';
export const SignIn = ()=>{
    return (
        <>
            <PageContainer>
                <InnerContainer>
                    <Login/>
                </InnerContainer>
            </PageContainer>
        </>
    )
}