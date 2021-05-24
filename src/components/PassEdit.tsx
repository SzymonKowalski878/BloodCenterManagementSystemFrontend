import React from 'react';
import { Container, Labels, Inputs, LittleBox, SubmitButton} from "./DataEdit"



export function Passedit() {
    return(
        <Container>
           <LittleBox>
                <Labels>
                    <label>Nowe hasło</label>
                    <label>Potwirdź nowe hasło</label>
                </Labels>
                <Inputs>
                    <input type="text"></input>
                    <input type="text"></input>
                    <SubmitButton type="submit">Aktualizuj hasło</SubmitButton>
                </Inputs>
            </LittleBox>
        </Container>
    )
}