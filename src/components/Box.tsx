import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Dataedit } from "./DataEdit";
import { Passedit } from "./PassEdit";
import styled from '@emotion/styled';

const Lmenu = styled.div`
    min-width:35vw;
    min-height: 50vh;
    display:flex;
    flex-direction: column;
    float:left;
`;
const NavDiv = styled.div`
    min-width:15vw;
    min-height: 5vh;
    margin-top: 2vh;
    display:flex;
    background-color: maroon;
    line-height: 10vh;
    justify-content: center;
    color:black;
    &:hover{
        color:white;
    }
`;

const Cont = styled.div`
    min-width:55vw;
    min-height: 50vh;
    display:flex;
    flex-direction: column;
`;

export function Box(){

    return(
        <>
        <Router>
            <Lmenu>
                <Link to="/pechange_rsonal_data" style={{textDecoration:'none',fontSize:'3vh'}}>
                    <NavDiv>
                        Edytuj dane personalne
                    </NavDiv>
                </Link>
                <Link to="/change_password" style={{textDecoration:'none',fontSize:'3vh'}}>
                    <NavDiv>
                        Edytuj hasło
                    </NavDiv>
                </Link>
            </Lmenu>
            <Cont>
                    <Route path="/pechange_rsonal_data" component={Dataedit} exact>
                        <Dataedit/>
                    </Route>
                    <Route path="/change_password" component={Passedit} exact>
                        <Passedit/>
                    </Route>
            </Cont>
        </Router>
        </>
    )
}