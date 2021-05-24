import React from 'react';
import { LoginForm } from './loginform';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { SignForm } from './signform';
import { PageContainer, InnerContainer } from './common';


export function AccountBox(){


    return ( 
    <PageContainer>
        <InnerContainer>
        <Router>
            <Route path="/" component={LoginForm} exact>
           <LoginForm/>
            </Route>
            <Route path="/signform" component={SignForm} exact>
           <SignForm/>
            </Route>
        </Router>         
        </InnerContainer>
    </PageContainer>
    )
}