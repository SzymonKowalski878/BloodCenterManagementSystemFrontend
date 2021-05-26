import React from 'react'
import { useHistory } from 'react-router'

const SignOut = () =>  {
    const history = useHistory()
    return(
        <>
            {localStorage.clear()}
            {history.push('/homePage')}
            {history.go(0)}
        </>
    )
}

export default SignOut